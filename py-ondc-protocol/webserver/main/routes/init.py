from flask import g, request
from flask_expects_json import expects_json
from flask_restx import Namespace, Resource, reqparse
from jsonschema import validate

from main.service.common import add_bpp_response, get_bpp_response_for_message_id, bpp_post_call
from main.service.utils import validate_auth_header
from main.utils.schema_utils import get_json_schema_for_given_path, get_json_schema_for_response
from main.logger.custom_logging import log

import json
init_namespace = Namespace('init', description='Init Namespace')


@init_namespace.route("/init")
class BPPInit(Resource):
    path_schema = get_json_schema_for_given_path('/init')
    #@expects_json(path_schema)
    def post(self):
        request_payload = request.get_json()
        log("\n\nRequest Received @/protocol/init/: \n")
        log(json.dumps(request_payload, indent=2))
        return bpp_post_call('init', request_payload)



@init_namespace.route("/v1/on_init")
class AddInitResponse(Resource):
    path_schema = get_json_schema_for_given_path('/on_init')

    #@validate_auth_header
    #@expects_json(path_schema)
    def post(self):
        request_payload = request.get_json() 
        log("\n\nRequest Received @/protocol/init/: \n")
        log(json.dumps(request_payload, indent=2))
        
        resp = add_bpp_response(request_payload, request_type='on_init')
        log(f"\n\n/on_init response to send to Node: {resp}\n\n")
        
        response_schema = get_json_schema_for_response('/on_init')
        validate(resp, response_schema)
        return resp


@init_namespace.route("/response/v1/on_init")
class GetInitResponseForMessageId(Resource):

    def create_parser_with_args(self):
        parser = reqparse.RequestParser()
        parser.add_argument("messageId", dest='message_id', required=True)
        return parser.parse_args()

    def get(self):
        args = self.create_parser_with_args()
        return get_bpp_response_for_message_id(request_type='on_init', **args)


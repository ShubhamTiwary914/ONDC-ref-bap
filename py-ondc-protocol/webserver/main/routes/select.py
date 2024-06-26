from flask import g, request
from flask_expects_json import expects_json
from flask_restx import Namespace, Resource, reqparse
from jsonschema import validate

from main.service.common import add_bpp_response, get_bpp_response_for_message_id, bpp_post_call
from main.service.utils import validate_auth_header
from main.utils.schema_utils import get_json_schema_for_given_path, get_json_schema_for_response
from main.logger.custom_logging import log
import json

select_namespace = Namespace('select', description='Select Namespace')


@select_namespace.route("/select")
class BPPSelect(Resource):
    path_schema = get_json_schema_for_given_path('/select')
    #@expects_json(path_schema)
    def post(self):
        request_payload = request.get_json()    
        print("\n\nRequest Received @Protocol:  /select")
        print(json.dumps(request_payload, indent=2))
        print("\n\n")
        return bpp_post_call('select', request_payload)



@select_namespace.route("/v1/on_select")
class AddSelectResponse(Resource):
    #path_schema = get_json_schema_for_given_path('/on_select')
    #@validate_auth_header
    #@expects_json(path_schema)
    def post(self):
        request_payload = request.get_json()  
        log("\n\nRequest Received @Protocol:  /on_select")  
        log(json.dumps(request_payload, indent=2))
        log("\n\n")
        
        resp = add_bpp_response(request_payload, request_type='on_select')
        log(f"\n\n/on_select response to send to Node: {resp}\n\n")
        
        response_schema = get_json_schema_for_response('/on_select')
        validate(resp, response_schema)
        return resp


@select_namespace.route("/response/v1/on_select")
class GetSelectResponseForMessageId(Resource):

    def create_parser_with_args(self):
        parser = reqparse.RequestParser()
        parser.add_argument("messageId", dest='message_id', required=True)
        return parser.parse_args()

    def get(self):
        args = self.create_parser_with_args()
        return get_bpp_response_for_message_id(request_type='on_select', **args)


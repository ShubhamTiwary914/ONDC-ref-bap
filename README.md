# ONDC-ref-bap
ONDC SDK web-app for running the Buyer Side Reference web app locally

This repo is ONDC Buyer App is developed with microservice architecture which contains

- protocol layer(python)
- client API layer (node js)
- front app(react) being served via nginx
- ancillary API (python) - flask apis for utilities like mapmyindia, knowlarity composed together with docker-compose.yaml

<br />


# Getting Started (Local Setup)

## 1. Clone the repo
```
  git clone https://github.com/ShubhamTiwary914/ONDC-ref-bap.git
```

<br />

## 2. Setting the Environment Variables
> [!NOTE]
> List of ENV Variables are listed in the '.env.example' file.  Create a .env file and fill the requried keys

<br />

Links to get the ENV Variables:
<br />

### A. Map My India (MMI)
> Get the MMI API Keys - https://about.mappls.com/api/

```
  MMI_CLIENT_SECRET={MMI_SECRET_KEY}
  MMI_CLIENT_ID={MMI_CLIENT_ID}
  MMI_ADVANCE_API_KEY={MMI_API_KEY}
```

### B. Firebase Keys
> Log into the firebase Console - https://console.firebase.google.com/u/0/
> Allow Google Auth & Get the Web-App API Keys:

```
  REACT_APP_FIREBASE_API_KEY={FIREBASE_API_KEY}
  REACT_APP_FIREBASE_AUTH_DOMAIN={FIREBASE_PROJECT_DOMAIN}
```


## 3. Run NGROK 

Install NGROK + Add Auth Token
```
  https://ngrok.com/download
  ngrok config add-authtoken $YOUR_AUTHTOKEN 
```

Run Ngrok on PoRT 5555
```
  ngrok http 5555
```


## 4. Run the Docker Containers
> [!NOTE]
> Prerequiresities: Docker & Docker-Compose, if not setup already - get it from https://docs.docker.com/get-docker/

```
  docker-compose -f docker-compose-for-local.yaml --env-file .env up 
```


import urllib.parse

import httpx


API_BASE_URL = "https://hackathon.lsp.team/"


def new_wallet():
	url = urllib.parse.urljoin(API_BASE_URL, '/hk/v1/wallets/new')
	headers = {
		"Accept": "application/json"
	}
	wallet_json = httpx.post(url, headers=headers).json()
	return wallet_json['privateKey'], wallet_json['publicKey']


def perform_transaction(sender, receiver, amount, transaction_type):	
	data = {
		"fromPrivateKey": sender,
		"toPublicKey": receiver,
		"amount": float(amount)
	}

	if transaction_type == 'digital_rubles':
		relative_part = '/hk/v1/transfers/ruble'
	elif transaction_type == 'matic':
		relative_part = '/hk/v1/transfers/matic'
	elif transaction_type == 'nft':
		relative_part = '/hk/v1/transfers/nft'
		data["tokenId"] = amount
		del data["amount"]
	else:
		raise ValueError('wrong transaction type')

	url = urllib.parse.urljoin(API_BASE_URL, relative_part)

	headers = {
		"Content-Type": "application/json",
		"Accept": "application/json"
	}
	transaction_json = httpx.post(url, headers=headers, json=data).json()
	return transaction_json.get('transaction') \
		or transaction_json.get('transaction_hash') 


def get_balance(public_key):
	url = urllib.parse.urljoin(
		API_BASE_URL,
		f'/hk/v1/wallets/{public_key}/balance'
	)
	headers = {
		"Accept": "application/json"
	}
	balance_json = httpx.get(url, headers=headers).json()
	return balance_json


def get_nfts(public_key):
	url = urllib.parse.urljoin(
		API_BASE_URL,
		f'/v1/wallets/{public_key}/nft/balance'
	)
	headers = {
		"Accept": "application/json"
	}
	nfts_json = httpx.get(url, headers=headers).json()
	return nfts_json


def get_balance_history(public_key):
	url = urllib.parse.urljoin(
		API_BASE_URL,
		f'/hk/v1/wallets/{public_key}/history'
	)
	headers = {
		"Content-Type": "application/json",
		"Accept": "application/json"
	}
	data = {
        "page": None,
        "offset": None,
        "sort": "acs"
	}
	history_json = httpx.post(url, headers=headers, json=data).json()
	return history_json


def get_status(transaction_hash):
	url = urllib.parse.urljoin(
		API_BASE_URL,
		f'/hk/v1/transfers/status/{transaction_hash}'
	)
	headers = {
		"Accept": "application/json"
	}
	status_json = httpx.get(url, headers=headers).json()
	return status_json


def generate_nfts(public_key, uri, nft_amount):
	url = urllib.parse.urljoin(
		API_BASE_URL,
		'/v1/nft/generate'
	)
	headers = {
		"Content-Type": "application/json",
		"Accept": "application/json"
	}
	data = {
        "toPublicKey": public_key,
        "uri": uri,
        "nftCount": nft_amount if nft_amount <= 20 else 20
	}
	history_json = httpx.post(url, headers=headers, json=data).json()
	return history_json	

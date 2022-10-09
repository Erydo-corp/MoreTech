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


def get_balance_history(public_key):
	pass


def get_status(transaction_hash):
	url = urllib.parse.urljoin(
		API_BASE_URL,
		f'/hk/v1/transfers/status/{transactionHash}'
	)
	headers = {
		"Accept": "application/json"
	}
	status_json = httpx.get(url, headers=headers).json()
	return status_json

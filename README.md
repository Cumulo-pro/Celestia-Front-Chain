# Celestia-Front-Chain
The web interface for Celestia's blockchain
Introduction
Getting Started
Package
What else can we do?
Metrics
Introduction
Publishing blockchain data as web content, whether to build a dashboard, a block explorer, or simply display certain data on the web, is often tedious, especially for front-end developers with no knowledge of technologies such as blockchain.

In addition, additional infrastructure is usually necessary to access such data, such as dedicated servers, RPC nodes, installation of services like Prometheus, Grafana, etc.

Celestia Front-Chain extracts data from two sources:

Prometheus
RPC Node
What does Celestia Front Chain solve?
With this small framework we aim to solve the development time and infrastructure for publishing blockchain data on the web. Making it easy for designers to create content with a few lines of html code.

A quick example of what we can do
Imagine you are a front-end designer and you want to integrate the data from a blockchain into a fun and attractive Dashboard for the public. You don't have to worry about anything but the design. Enter the necessary functions to display the data in the header of the page and the id to the html elements with which you want to associate the metric values. That's it! You are ready to go!

Getting Started
1) Add the following code inside the header <head>:

<script type="text/javascript" src="imp_data.js"></script>
2) Add the function code that corresponds to the metric to display, inside the <head> header:


  <script>

  //Function call (metric name, chain-id)

  showdata("block","blockspacerace");

</script>
3) In case you enter a metric that is frequently updated you can add the following line:

 
<script>
     setInterval(function(){
        showdata("block","blockspacerace");
 },5000); // delay 5 seg
</script>
NOTE: You can see all available metrics here.

3) Add the id attribute with the name of the function to the tag you want to use to display the metric value:

<p>Celestia Blockspacerace Height: <span id="block"></span></p>
You can see the full example here.

Package
imp_data.js

Holds the methods needed to create an XMLHttpRequest connection and extract the data from Prometheus or the RPC node.


get_prometheus.php

Contains the routines needed to open the Prometheus path (in Mocha or Blockspacerace) and trace the code needed to display and print the metrics. Being able to display tendermint metrics:

https://docs.tendermint.com/v0.34/tendermint-core/metrics.html

get_rpc.php


Contains the routines needed to access the RPC node (Mocha or Blockspacerace) and execute the RPC protocols:

https://docs.tendermint.com/v0.34/rpc/

Printing the results on screen.

NOTE: we have chosen to print directly in an HTML tag identified by the id attribute, instead of sending the variable via AJAX, javascript, etc. to the interface environment to simplify the task of the front-end designer at the cost of limiting the possibility of having more flexibility to perform calculations and interactions by the designer (e.g. percentage of voting power).

This way the designer can get the data from the blockchain without having any knowledge of how the metrics work, and we get a much cleaner web interface.

What else can we do?
In addition to displaying the data we can create different ways to interact with the blockchain metrics, such as sending forms with data requests, adapting the blockchain metrics to fun ways of displaying the information, such as animations, element positions, etc...

For a more complete demonstration please visit our example Dashboard.

Métrics celestia Test
Metrics from Prometheus - get_prometheus.php
Chain 
BLOCKSPACERACE
Chain: blockspacerace-0

Data	Description	Funtion	Id
Nº block: 454,811.	consensus_height: Height of the chain	showdata("block","blockspacerace");	
id="block"
Nº validators: 100	consensus_validators: Number of validators	showdata("num_val","blockspacerace");
showdata("num_val","mocha");	
id="num_val"
Validator Voting Power: 484,562,144.	consensus_validators_power: Total voting power of all validators	showdata("val_power","blockspacerace");	
id="val_power"
Validator Missing Voting Power: 9,775,370.	consensus_missing_validators_power : Total voting power of the missing validators	showdata("missing_power","blockspacerace");	
id="missing_power"
Online Validators: 97	consensus_validators-consensus_missing_validators : Number of validators - Total voting power of the missing validators	showdata("online_validators","blockspacerace");	
id="online_validators"
Block time: 11.02 seg	consensus_block_interval_seconds : Time between this and last block	showdata("block_time","blockspacerace");	
id="block_time"
Nº txs: 131,774.	consensus_total_txs : Total number of transactions committed	showdata("num_tx","blockspacerace");	
id="num_tx"
Block size: 13.77 Kb	consensus_block_size_bytes : Block size in bytes	showdata("block_size_b","blockspacerace");	
id="block_size_b"
Connected Peers: 91	p2p_peers : Number of peers node's connected to	showdata("num_peers","blockspacerace");	
id="num_peers"
Metrics from RPC - get-rpc.php
Functions accepting requests
Data	Description	Funtion	Id	Parameters
Get hash block:
chain-id: blockspaceraceblock hash 380433: A2E2F7B9B237862761413F661EDBBB12012BB99DA659EA1CF2874C577864C29F	Returns the hash of the requested block number	rpc_data("get_hash","380433","blockspacerace");	
id="get_hash"
num block
Get validator proposer pubkey:
phznsmrE7lOu5XXNaye8PqBx3rTLZ4mYv2YkbiK90JI=	Returns the pubkey of the validator signing the requested block number	rpc_data("get_val_sign","380433","blockspacerace");	
id="get_val_sign"
num block
Get moniker from pubkey:
Cumulo	Returns the validator's moniker according to the requested pubkey	rpc_data("get_moniker_pubkey",
"WyoR+T2WxbuJvI/4B+27iVvc+mu3y6pXF+OFzglQw68=","blockspacerace");	
id="get_moniker_pubkey"
pubkey
Get validator data
Returns an html structure with the main validator data according to the requested pubkey	rpc_data("get_validator_data",
"WyoR+T2WxbuJvI/4B+27iVvc+mu3y6pXF+OFzglQw68=","blockspacerace");	
id="get_validator_data"
pubkey
Get validator proposer moniker:
4sv	Returns the moniker of the validator signing the requested block number	rpc_data("get_val_sign_moniker","345","blockspacerace");	
id="get_val_sign_moniker"
num block
Functions without requests
Data	Description	Funtion	Id
Get token chain: TIA	Returns the token of the chain	rpc_data("get_token","blockspacerace");	
id="get_token"
Get base token chain: utia	Returns the base token of the chain	rpc_data("get_token","blockspacerace");	
id="get_base_token"
Get max validators: 100	Returns the number of validators allowed in the active set	rpc_data("get_max_validators","blockspacerace");	
id="get_max_validators"
Get unbonding time: 21	Returns the unbonding time	rpc_data("get_unbonding_time","blockspacerace");	
id="get_unbonding_time"
Get last block: 454810	Returns the last block of the chain	rpc_data("get_block_rpc","blockspacerace");	
id="get_block_rpc"
Get proposer block: ZKValidator	Returns the proporser moniker of the last block of the chain	rpc_data("get_block_sign_moniker","blockspacerace");	
id="get_block_sign_moniker"
Get pubkey proposer block: ueUh8xh/b1zlBcCgblxHrZ9impMwKOkgyG5P3f1HkjE=	Returns the proporser pubkey of the last block of the chain	rpc_data("get_block_sign_pubkey","blockspacerace");	
id="get_block_sign_pubkey"
Get RPC status: 	Tests if the RPC node we are connected to is synchronised and returns a green colour, or red if it is not.	rpc_data("get_rpc_status","blockspacerace");	
id="get_rpc_status"

# Celestia-Front-Chain
<h2>The web interface for Celestia's blockchain</h2>


<h2>Introduction</h2>
Publishing blockchain data as web content, whether to build a dashboard, a block explorer, or simply display certain data on the web, is often tedious, especially for front-end developers with no knowledge of technologies such as blockchain.

In addition, additional infrastructure is usually necessary to access such data, such as dedicated servers, RPC nodes, installation of services like Prometheus, Grafana, etc.

Celestia Front-Chain extracts data from two sources:

<ul>
  <li>Prometheus</li>
  <li>RPC Node</li>
</ul>

<h3>What does Celestia Front Chain solve?</h3>
With this small framework we aim to solve the development time and infrastructure for publishing blockchain data on the web. Making it easy for designers to create content with a few lines of html code.

<h3>A quick example of what we can do</h3>
Imagine you are a front-end designer and you want to integrate the data from a blockchain into a fun and attractive Dashboard for the public. You don't have to worry about anything but the design. Enter the necessary functions to display the data in the header of the page and the id to the html elements with which you want to associate the metric values. That's it! You are ready to go!

<h3>Getting Started</h3>
1) Add the following code inside the header <head>:

  <code><script type="text/javascript" src="imp_data.js"></script></code>

2) Add the function code that corresponds to the metric to display, inside the <head> header:

<code><script>
    //Function call (metric name, chain-id)
    showdata("block","blockspacerace");
  </script></code>
  
3) In case you enter a metric that is frequently updated you can add the following line:
 
<code><script>
     setInterval(function(){
        showdata("block","blockspacerace");
 },5000); // delay 5 seg
  </script></code>
  
  <strong>NOTE</strong>: You can see all available metrics <a href="https://celestia.frontchain.cumulo.pro/guide.html#metrics">here</a>.

3) Add the id attribute with the name of the function to the tag you want to use to display the metric value:

  <code>&lt;p&gt;Celestia Blockspacerace Height: &lt;span id=&quot;block&quot;&gt;&lt;/span&gt;&lt;/p&gt;</code>

  You can see the full example <a href="https://celestia.frontchain.cumulo.pro/">here</a>.

<img width="952" alt="image" src="https://github.com/Cumulo-pro/Celestia-Front-Chain/assets/2853158/3f0ec551-f783-4f7b-a9a6-7902888bdd8d">


  <h3>Package</h3>
  
  <table>
    <colgroup>
      <col width="158" />
      <col width="423" />
    </colgroup>
    <tbody>
      <tr>
        <td><p dir="ltr"><strong><a href="https://github.com/Cumulo-pro/Celestia-Front-Chain/blob/main/imp_data.js">imp_data.js </a></strong></p></td>
        <td><p dir="ltr">Holds the methods needed to create an XMLHttpRequest connection and extract the data from Prometheus or the RPC node.</p>
          <strong><br />
          </strong></td>
      </tr>
      <tr>
        <td><p><strong><a href="https://github.com/Cumulo-pro/Celestia-Front-Chain/blob/main/get_prometheus.php">get_prometheus.php</a></strong></p></td>
        <td><p>Contains the routines needed to open the Prometheus path (in Mocha or Blockspacerace) and trace the code needed to display and print the metrics. Being able to display tendermint metrics:
</p>
          <p><a href="https://docs.tendermint.com/v0.34/tendermint-core/metrics.html">https://docs.tendermint.com/v0.34/tendermint-core/metrics.html</a></p>
          </td>
      </tr>
      <tr>
        <td><p><strong><a href="https://github.com/Cumulo-pro/Celestia-Front-Chain/blob/main/get_rpc.php">get_rpc.php</a></strong></p>
          <strong><br />
          </strong></td>
        <td><p>Contains the routines needed to access the RPC node (Mocha or Blockspacerace) and execute the RPC protocols:</p>
          <p><strong><a href="https://docs.tendermint.com/v0.34/rpc/">https://docs.tendermint.com/v0.34/rpc/</a></strong></p>
          <p>Printing the results on screen.</p></td>
      </tr>
    </tbody>
  </table>
  
  
  <strong>NOTE</strong>: we have chosen to print directly in an HTML tag identified by the id attribute, instead of sending the variable via AJAX, javascript, etc. to the interface environment to simplify the task of the front-end designer at the cost of limiting the possibility of having more flexibility to perform calculations and interactions by the designer (e.g. percentage of voting power).

This way the designer can get the data from the blockchain without having any knowledge of how the metrics work, and we get a much cleaner web interface.

  <h3>What else can we do?</h3>
In addition to displaying the data we can create different ways to interact with the blockchain metrics, such as sending forms with data requests, adapting the blockchain metrics to fun ways of displaying the information, such as animations, element positions, etc...

For a more complete demonstration please visit our example <a href="https://celestia.frontchain.cumulo.pro/">Dashboard</a>.

<h2 id="metrics">Métrics celestia Test </h2>
<h3>Metrics from Prometheus - get_prometheus.php</h3>

<table>
	<tr>
    	<th>Data</th><th>Description</th><th>Funtion</th><th>Id</th>
    </tr>
	<tr>
    	<td><strong>Nº block: </strong><span id="block"></span></td><td>consensus_height: Height of the chain</td></td><td><code>showdata("block","blockspacerace");</code></td><td><pre>id="block"</pre></td>
    </tr>
	<tr>
    	<td><strong>Nº validators: </strong><span id="num_val"></span></td><td>consensus_validators: Number of validators</td></td><td><code>showdata("num_val","blockspacerace");</code><br /><code>showdata("num_val","mocha");</code></td><td><pre>id="num_val"</pre></td>
    </tr>
    <tr>
    <td><strong>Validator Voting Power: </strong><span id="val_power"></span></td><td>consensus_validators_power: Total voting power of all validators</td></td><td><code>showdata("val_power","blockspacerace");</code></td><td><pre>id="val_power"</pre></td>
    </tr>
    <tr>
    <td><strong>Validator Missing Voting Power: </strong><span id="missing_power"></span></td><td>consensus_missing_validators_power	: Total voting power of the missing validators</td></td><td><code>showdata("missing_power","blockspacerace");</code></td><td><pre>id="missing_power"</pre></td>
    </tr>
     <tr>
    <td><strong>Online Validators: </strong><span id="online_validators"></span></td><td>consensus_validators-consensus_missing_validators	: Number of validators - Total voting power of the missing validators</td></td><td><code>showdata("online_validators","blockspacerace");</code></td><td><pre>id="online_validators"</pre></td>
    </tr>
    <tr>
    <td><strong>Block time: </strong><span id="block_time"></span> seg</td><td>consensus_block_interval_seconds	: Time between this and last block</td></td><td><code>showdata("block_time","blockspacerace");</code></td><td><pre>id="block_time"</pre></td>
    </tr>
    <tr>
    <td><strong>Nº txs: </strong><span id="num_tx"></span></td><td>consensus_total_txs	: Total number of transactions committed</td></td><td><code>showdata("num_tx","blockspacerace");</code></td><td><pre>id="num_tx"</pre></td>
    </tr>
    <tr>
    <td><strong>Block size: </strong><span id="block_size_b"></span> Kb</td><td>consensus_block_size_bytes	: Block size in bytes</td></td><td><code>showdata("block_size_b","blockspacerace");</code></td><td><pre>id="block_size_b"</pre></td>
    </tr>
    <tr>
    <td><strong>Connected Peers: </strong><span id="num_peers"></span></td><td>p2p_peers	: Number of peers node's connected to</td></td><td><code>showdata("num_peers","blockspacerace");</code></td><td><pre>id="num_peers"</pre></td>
    </tr>
</table>



<h3>Metrics from RPC - get-rpc.php</h3>
<h4>Functions accepting requests</h4>
<table>
	<tr>
   	  <th>Data</th><th width="200">Description</th><th>Funtion</th><th>Id</th><th>Parameters</th>
    </tr>
 	<tr>
   	  <td><strong>Get hash block:<br> </strong><span id="get_hash" class="litt"></span></td><td width="200">Returns the hash of the requested block number </td></td><td><code>rpc_data("get_hash","380433","blockspacerace");</code></td><td><pre>id="get_hash"</pre></td><td>num block</td>
    </tr>
    <tr>
   	  <td><strong>Get validator proposer pubkey:<br> </strong><span id="get_val_sign" class="litt"></span></td><td width="200">Returns the pubkey of the validator signing the requested block number</td></td><td><code>rpc_data("get_val_sign","380433","blockspacerace");</code></td><td><pre>id="get_val_sign"</pre></td><td>num block</td>
    </tr>
    <tr>
   	  <td><strong>Get moniker from pubkey:<br> </strong><span id="get_moniker_pubkey"></span></td><td width="200">Returns the validator's moniker according to the requested pubkey</td></td><td><code>rpc_data("get_moniker_pubkey",<br><span class="litt">"WyoR+T2WxbuJvI/4B+27iVvc+mu3y6pXF+OFzglQw68="</span>,"blockspacerace");</code></td><td><pre>id="get_moniker_pubkey"</pre></td><td>pubkey</td>
    </tr>
    <tr>
   	  <td><strong>Get validator data<br> </strong></span></td><td width="200">Returns an html structure with the main validator data according to the requested pubkey</td></td><td><code>rpc_data("get_validator_data",<br><span class="litt">"WyoR+T2WxbuJvI/4B+27iVvc+mu3y6pXF+OFzglQw68="</span>,"blockspacerace");</code></td><td><pre>id="get_validator_data"</pre></td><td>pubkey</td>
    </tr>
    <tr>
   	  <td><strong>Get validator proposer moniker: <br></strong><span id="get_val_sign_moniker"></span></td><td width="200">Returns the moniker of the validator signing the requested block number</td></td><td><code>rpc_data("get_val_sign_moniker","345","blockspacerace");</code></td><td><pre>id="get_val_sign_moniker"</pre></td><td>num block</td>
    </tr>
</table>

<h4>Functions without requests</h4>
<table>
	<tr>
    	<th>Data</th><th>Description</th><th>Funtion</th><th>Id</th>
    </tr>
 	<tr>
    	<td><strong>Get token chain: </strong><span id="get_token"></span></td><td>Returns the token of the chain</td></td><td><code>rpc_data("get_token","blockspacerace");</code></td><td><pre>id="get_token"</pre></td>
    </tr>
    <tr>
    	<td><strong>Get base token chain: </strong><span id="get_base_token"></span></td><td>Returns the base token of the chain</td></td><td><code>rpc_data("get_token","blockspacerace");</code></td><td><pre>id="get_base_token"</pre></td>
    </tr>
    <tr>
    	<td><strong>Get max validators: </strong><span id="get_max_validators"></span></td><td>Returns the number of validators allowed in the active set</td></td><td><code>rpc_data("get_max_validators","blockspacerace");</code></td><td><pre>id="get_max_validators"</pre></td>
    </tr>
    <tr>
    	<td><strong>Get unbonding time: </strong><span id="get_unbonding_time"></span></td><td>Returns the unbonding time</td></td><td><code>rpc_data("get_unbonding_time","blockspacerace");</code></td><td><pre>id="get_unbonding_time"</pre></td>
    </tr>
    <tr>
    	<td><strong>Get last block: </strong><span id="get_block_rpc"></span></td><td>Returns the last block of the chain</td></td><td><code>rpc_data("get_block_rpc","blockspacerace");</code></td><td><pre>id="get_block_rpc"</pre></td>
    </tr>
    <tr>
    	<td><strong>Get proposer block: </strong><span id="get_block_sign_moniker"></span></td><td>Returns the proporser moniker of the last block of the chain</td></td><td><code>rpc_data("get_block_sign_moniker","blockspacerace");</code></td><td><pre>id="get_block_sign_moniker"</pre></td>
    </tr>
    <tr>
    	<td><strong>Get pubkey proposer block: </strong><span id="get_block_sign_pubkey" class="litt"></span></td><td>Returns the proporser pubkey of the last block of the chain</td></td><td><code>rpc_data("get_block_sign_pubkey","blockspacerace");</code></td><td><pre>id="get_block_sign_pubkey"</pre></td>
    </tr>
    <tr>
    	<td><strong>Get RPC status: </strong><span id="get_rpc_status"></span></span></td><td>Tests if the RPC node we are connected to is synchronised and returns a green colour, or red if it is not.</td></td><td><code>rpc_data("get_rpc_status","blockspacerace");</code></td><td><pre>id="get_rpc_status"</pre></td>
    </tr>
</table>

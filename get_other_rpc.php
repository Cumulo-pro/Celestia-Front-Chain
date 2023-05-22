<!--
extract info from antoher RPC query 
-->

<?php
//error_reporting(0);


//extract from RPC
switch($pide=$_REQUEST['dato']){
case $pide=="get_test_rpc":
$rpc=$_REQUEST['rpc'];
		if($data_json = @file_get_contents($rpc.'status?')){
				$json = json_decode($data_json);
				$allData=$json->result;
				$sync_info=$allData->sync_info;
				$catching_up=$sync_info->catching_up;
				if ($catching_up==false){
					echo "<div style='background:green;border-radius: 50%;width: 20px;height:20px;display:inline-block;position:relative;top:5px'> </div>";
					}else{
					echo "<div style='background:red;border-radius: 50%;width: 20px;height:20px;display:inline-block'> </div>";									}		
		}else{
				echo "<div style='background:red;border-radius: 50%;width: 20px;height:20px;display:inline-block'> </div>";
					}
break;
case $pide=="get_moniker_rpc":
$rpc=$_REQUEST['rpc'];
	if($data_json = @file_get_contents($rpc.'status?')){
				$json = json_decode($data_json);
				$allData=$json->result;
				$nodeinfo=$allData->node_info;
				$moniker=$nodeinfo->moniker;
				echo $moniker;
			}		
break;
case $pide=="get_chain_rpc":
$rpc=$_REQUEST['rpc'];
	if($data_json = @file_get_contents($rpc.'status?')){
				$json = json_decode($data_json);
				$allData=$json->result;
				$nodeinfo=$allData->node_info;
				$network=$nodeinfo->network;
				echo $network;
			}	
break;
case $pide=="get_tx_index_rpc":
$rpc=$_REQUEST['rpc'];
	if($data_json = @file_get_contents($rpc.'status?')){
				$json = json_decode($data_json);
				$allData=$json->result;
				$nodeinfo=$allData->node_info;
				$other=$nodeinfo->other;
				$tx_index=$other->tx_index;
				echo $tx_index;
			}	
break;

}
?>



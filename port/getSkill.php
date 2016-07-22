
	<?php
	header("Content-type:text/html;charset=utf-8");  

	$conn=mysql_connect("qdm162701456.my3w.com:3306","qdm162701456","ztf123245");
	$select=mysql_select_db("qdm162701456_db",$conn);
	mysql_query("set names 'utf8'");
	$sql_me= mysql_query("select * from user_me where id=1");

	$value=null;
	$row_me=mysql_fetch_object($sql_me);
	if($row_me != NULL){
		$value='"name":"'.$row_me->name.'","birthday":"'.$row_me->birthday.'","phone":"'.$row_me->phone.'","email":"'.$row_me->email.'","college":"'.$row_me->college.'","major":"'.$row_me->major.'","degree":"'.$row_me->degree.'","work":"'.$row_me->work.'","practice":"'.$row_me->practice.'","hobby":'.$row_me->hobby.',"evaluation":'.$row_me->evaluation.',"skill":[{';
	}

	$sql = mysql_query("select * from myskill where id=1 order by skillid asc");
	while($row=mysql_fetch_object($sql)){
		if($row != NULL){
		    $value.='"'.$row->skill.'":"'.$row->percent.'-'.$row->color.'",';
		}
	}
	$length=strlen($value);
	$value=substr($value,0,$length-1);
	mysql_close($conn);
	echo '[{'.$value.'}]}]';
	?>
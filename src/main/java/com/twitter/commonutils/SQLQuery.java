package com.twitter.commonutils;

public class SQLQuery {

	public static final String duplicatequery= "Select * from table1 t1 JOIN table t2 on t1.column1=t2.column";
	public static final String duplicatevalues = "SELECT OrderID, COUNT(OrderID) FROM Orders GROUP BY OrderID HAVING COUNT(OrderID)>1";
}

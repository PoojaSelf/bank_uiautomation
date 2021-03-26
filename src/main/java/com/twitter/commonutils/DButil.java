package com.twitter.commonutils;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.text.SimpleDateFormat;

import org.apache.commons.dbutils.DbUtils;
import org.json.JSONException;
import org.json.JSONObject;
import org.testng.SkipException;
import org.testng.log4testng.Logger;

import com.mysql.cj.protocol.Resultset;

public class DButil {

	static ResultSet rs;
	
	public static JSONObject TableDataDtls = new JSONObject();
	
	private static Connection getConnection() {
		DbUtils.loadDriver(DbConstant.DB_DRIVER);
		Connection conn = null;
		try {
			conn = DriverManager.getConnection(DbConstant.DB_CONNECTION_URL, DbConstant.WLUSERNAME, DbConstant.WLPASSWORD);
		} catch (SQLException e) {
			throw new SkipException("Skipping test case, connection error");
		}
		return conn;
	}
	
	
	public static ResultSet getResultSet(String query) {
		Connection conn = null;
		PreparedStatement stmt;
		rs = null;
		
		try {
			conn = getConnection();
			
			stmt = conn.prepareStatement(query);
			Thread.sleep(1000);
			rs = stmt.executeQuery();

			rs.next();
			

		} catch (Exception e) {
			throw new SkipException("Skipping test case, connection error");
		}
		
		return rs;
	}
	
	public static JSONObject getTableData(ResultSet rs)
	{
		try {
			
		TableDataDtls.put(CommonKeys.key1, rs.getString(DbConstant.key1));
		
		} catch (Exception e) {
			throw new SkipException("Skipping test case, connection error");
		} 
		
		return TableDataDtls;
	}
	
	public static String getfieldValueFromResultSet(ResultSet rs, String columnName) throws SQLException {
		Object fieldValue = null;
		int i;
		System.out.println(rs.getMetaData().getColumnCount());
		int colncount = rs.getMetaData().getColumnCount();
		
		for (i=1; i<= colncount; i++)
		{
			if(rs.getMetaData().getColumnLabel(i).equals(columnName))
			
				{
				break;
				}
			else {
				
			}
		}
		
		String datatype = rs.getMetaData().getColumnTypeName((i));
		
		
		switch (datatype)
		{
		case "long":
			fieldValue = rs.getLong(columnName);
			break;
		
		case "int":
			fieldValue = rs.getInt(columnName);
			break;
			
		case "string":
			fieldValue = rs.getString(columnName);
			break;
		
		case "VARCHAR":
			fieldValue = rs.getString(columnName);
			break;
			
		case "Date":
			fieldValue = rs.getDate(columnName);
			break;
			
		case "boolean":
			fieldValue = rs.getBoolean(columnName);
			break;
			
		default:
			fieldValue = rs.getString(columnName);
			break;
		}
		return fieldValue.toString();
	}

}

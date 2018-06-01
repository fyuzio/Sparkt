using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
//using System.Data.EntityClient;
using System.Data.Common;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Reflection;
//using System.Data.Objects;

namespace PHFL.DataAccess.Common
{
    public static class DatabaseHelper
    {
        public static List<T> ExecuteStoreProcedure<T>(string ConnectionString, string commandText, Dictionary<string, object> parameters)
        {
            List<T> outputdata = new List<T>();
            try
            {

                string connectTimeout = ConfigurationManager.AppSettings["ConnectTimeout"].ToString();
                SqlConnectionStringBuilder builder = new SqlConnectionStringBuilder(ConnectionString);
                builder.ConnectTimeout = Convert.ToInt32(connectTimeout);
                using (SqlConnection con = new SqlConnection(builder.ConnectionString))
                {
                    con.Open();
                    using (SqlCommand cmd = con.CreateCommand())
                    {
                        cmd.CommandText = commandText;
                        cmd.CommandType = System.Data.CommandType.StoredProcedure;
                        cmd.CommandTimeout = 0;
                        if (parameters != null)
                        {
                            foreach (var param in parameters)
                            {
                                if (param.Value != null)
                                {
                                    //cmd.Parameters.AddWithValue(param.Key, param.Value.GetType().Equals(typeof(string)) ? param.Value.ToString().EscapeSQLUTF8() : param.Value);
                                    cmd.Parameters.AddWithValue(param.Key, param.Value);
                                }
                                else
                                {
                                    object strParmaValue = param.Value;
                                    strParmaValue = string.Empty;
                                    cmd.Parameters.AddWithValue(param.Key, strParmaValue);
                                }

                            }
                        }

                        SqlDataReader objSqlDataReader = cmd.ExecuteReader(CommandBehavior.CloseConnection);
                        outputdata = GetDataFromSqlDataReader<T>(objSqlDataReader);
                    }
                }
                return outputdata;
            }
            catch (Exception ex)
            {
                //UserHelper.LogError(ex);
                throw ex;
            }
        }

        public static DataTable ExecuteStoreProcedure(string ConnectionString, string commandText, Dictionary<string, object> parameters)
        {
            try
            {
                DataTable outputdata = new DataTable();
                string connectTimeout = ConfigurationManager.AppSettings["ConnectTimeout"].ToString();
                SqlConnectionStringBuilder builder = new SqlConnectionStringBuilder(ConnectionString);
                builder.ConnectTimeout = Convert.ToInt32(connectTimeout);
                using (SqlConnection con = new SqlConnection(builder.ConnectionString))
                {
                    con.Open();
                    using (SqlCommand cmd = con.CreateCommand())
                    {
                        cmd.CommandText = commandText;
                        cmd.CommandType = System.Data.CommandType.StoredProcedure;
                        cmd.CommandTimeout = 0;
                        if (parameters != null)
                        {
                            foreach (var param in parameters)
                            {
                                if (param.Value != null)
                                {
                                    //cmd.Parameters.AddWithValue(param.Key, param.Value.GetType().Equals(typeof(string)) ? param.Value.ToString().EscapeSQLUTF8() : param.Value);
                                    cmd.Parameters.AddWithValue(param.Key, param.Value);
                                }
                                else
                                {
                                    object strParmaValue = param.Value;
                                    strParmaValue = string.Empty;
                                    cmd.Parameters.AddWithValue(param.Key, strParmaValue);
                                }

                            }
                        }

                        SqlDataReader objSqlDataReader = cmd.ExecuteReader(CommandBehavior.CloseConnection);
                        outputdata.Load(objSqlDataReader);
                    }
                }
                return outputdata;
            }
            catch (Exception ex)
            {
                //UserHelper.LogError(ex);
                throw ex;
            }
        }

        public static List<T> GetDataFromSqlDataReader<T>(IDataReader dr)
        {
            try
            {
                List<T> list = new List<T>();
                T obj = default(T);
                Type t = typeof(T);

                int count = 0;
                while (dr.Read())
                {
                    if (t == typeof(string))
                    {
                        list.Add((T)dr[count]);
                    }
                    else
                    {
                        obj = Activator.CreateInstance<T>();
                        if (obj.GetType().GetProperties().Length > 0)
                        {
                            foreach (PropertyInfo prop in obj.GetType().GetProperties())
                            {
                                if (ColumnExists(dr, prop.Name))
                                {
                                    if (!object.Equals(dr[prop.Name], DBNull.Value))
                                    {
                                        prop.SetValue(obj, dr[prop.Name], null);
                                    }
                                }
                            }
                            list.Add(obj);
                        }
                        else
                        {
                            list.Add((T)dr[count]);
                        }
                    }

                    count += 1;
                }
                return list;
            }
            catch (Exception ex)
            {
                //UserHelper.LogError(ex);
                throw ex;
            }
        }

        public static bool ColumnExists(IDataReader reader, string columnName)
        {
            return reader.GetSchemaTable().Rows.OfType<DataRow>().Any(row => row["ColumnName"].ToString().ToLower() == columnName.ToLower());
        }       
    }
}

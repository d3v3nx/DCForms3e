using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using Microsoft.Extensions.Configuration;

namespace dc_forms_3e.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FormDataController : ControllerBase
    {
        private readonly string _connectionString;

        public FormDataController(IConfiguration configuration)
        {            
            _connectionString = configuration.GetConnectionString("DefaultConnectionString") + ";Database=dc-forms";
        }

        [HttpGet]
        public IActionResult GetData()
        {
            try
            {               
                using (SqlConnection connection = new SqlConnection(_connectionString))
                {
                    connection.Open();
                    
                    string query = "SELECT * FROM FormData";
                    
                    using (SqlCommand command = new SqlCommand(query, connection))
                    {                        
                        using (SqlDataReader reader = command.ExecuteReader())
                        {                            
                            List<Dictionary<string, object>> results = new List<Dictionary<string, object>>();
                            
                            while (reader.Read())
                            {
                                var data = new Dictionary<string, object>();

                                for (int i = 0; i < reader.FieldCount; i++)
                                {
                                    var columnName = reader.GetName(i);
                                    var columnValue = reader.GetValue(i);

                                    data.Add(columnName, columnValue);
                                }
                                results.Add(data);
                            }
                            return Ok(results); 
                        }
                    }
                }
            }
            catch (Exception ex)
            {             
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }
    
    }
}

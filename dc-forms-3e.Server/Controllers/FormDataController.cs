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
            // Replace "YourConnectionString" with your actual SQL Server connection string
            _connectionString = configuration.GetConnectionString("DefaultConnectionString") + ";Database=dc-forms";
        }

        [HttpGet]
        public IActionResult GetData()
        {
            try
            {
                // Create a connection to the SQL Server database
                using (SqlConnection connection = new SqlConnection(_connectionString))
                {
                    connection.Open();

                    // Define the SQL query to retrieve data
                    string query = "SELECT * FROM FormData";

                    // Create a command to execute the query
                    using (SqlCommand command = new SqlCommand(query, connection))
                    {
                        // Execute the query and retrieve the data
                        using (SqlDataReader reader = command.ExecuteReader())
                        {
                            // Create a list to hold the results
                            List<Dictionary<string, object>> results = new List<Dictionary<string, object>>();

                            // Read the data and add it to the results list
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

                            return Ok(results); // Return the data as JSON
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                // Return an error message if something went wrong
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }
    
    }
}

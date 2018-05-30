using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sparkt.Entities
{
	public class CaptchaResponse
	{
		public bool Success { get; set; }
		public List<String> ErrorMessage { get; set; }			
	}
}

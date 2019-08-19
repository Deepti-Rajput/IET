using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FirstApplication.UnitTest
{
	[TestFixture]
    public class FirstAppTest
    {
		[TestCase]
		public void WhenFirstUnitTestCallReturnSuccess()
		{
			bool result = true;
			Assert.That(result == true);
		}
	}
}

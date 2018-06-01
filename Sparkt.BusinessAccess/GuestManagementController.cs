using Sparkt.DataAccess;
using Sparkt.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sparkt.BusinessAccess
{
    public class GuestManagementController
    {
        private readonly GuestDataAccess _guestDataAccess;
        public GuestManagementController(GuestDataAccess guestDataAccess)
        {
            _guestDataAccess = guestDataAccess;
        }

        public bool InsertGuestDetails(GuestEntity guestEntity)
        {
            return _guestDataAccess.InsertGuestDetails(guestEntity);
        }
    }
}

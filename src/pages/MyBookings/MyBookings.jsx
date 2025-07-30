import { useSelector } from "react-redux";

const MyBookings = () => {
  const bookings = useSelector((state) => state.bookings);

  const totalPaid = bookings.reduce((sum, b) => sum + Number(b.total), 0);

  return (
    <div className="p-6 max-w-4xl">
      <h2 className="text-2xl font-bold mb-4">My Bookings</h2>

      {bookings.length === 0 ? (
        <p className="text-gray-500">You haven't booked any hotels yet.</p>
      ) : (
        <>
          {bookings.map((booking, index) => {
            const hotel = booking.hotel;
            const address = hotel.address;

            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-4 mb-6 flex flex-col md:flex-row gap-4"
              >
                <img
                  src={hotel.images?.main || hotel.images?.gallery?.[0]}
                  alt={hotel.name}
                  className="w-full md:w-64 h-40 object-cover rounded-lg"
                />
                <div className="flex flex-col justify-between w-full">
                  <div>
                    <h3 className="text-xl font-semibold">{hotel.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {address?.street}, {address?.city}, {address?.state},{" "}
                      {address?.country}
                    </p>

                    <div className="text-sm text-gray-500 mt-3 space-y-1">
                      <p>
                        <strong>Check-in:</strong>{" "}
                        {new Date(booking.fromDate).toLocaleDateString()}
                      </p>
                      <p>
                        <strong>Check-out:</strong>{" "}
                        {new Date(booking.toDate).toLocaleDateString()}
                      </p>
                      <p>
                        <strong>Guests:</strong> {booking.title}{" "}
                        {booking.lastName} – {booking.mobile}
                      </p>
                    </div>
                  </div>
                  <div className="text-right mt-4 md:mt-0 text-blue-600 font-semibold text-lg">
                    Total: ${booking.total}
                  </div>
                </div>
              </div>
            );
          })}

          <div className="text-right mt-8 border-t pt-4">
            <p className="text-xl font-bold text-gray-800">
              Total Paid: ${totalPaid.toFixed(2)}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default MyBookings;

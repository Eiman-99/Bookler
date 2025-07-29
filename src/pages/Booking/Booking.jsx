import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getHotelDetails } from "../../api/hotelDetails";
import { useDispatch } from "react-redux";
import { addBooking } from "../../redux/bookingsSlice";

function Booking() {
  const dispatch = useDispatch();

  const { id } = useParams();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const user = useSelector((state) => state.auth.currentUser);

  const [hotel, setHotel] = useState(null);
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const getNights = () => {
    if (!fromDate || !toDate) return 0;
    const timeDiff = Math.abs(toDate - fromDate);
    return Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  };

  const total = getNights() * (hotel?.pricing[0].originalPrice || 0);

  useEffect(() => {
    getHotelDetails(id)
      .then((res) => {
        setHotel(res.data);
        console.log(res.data);
      })
      .catch(console.error);
  }, [id]);

  useEffect(() => {
    if (user) {
      setValue("firstName", user.firstName);
      setValue("lastName", user.lastName);
      setValue("email", user.email);
      setValue("mobile", user.phone);
      setValue("country", user.country || "Egypt");
    }
  }, [user, setValue]);

  const onSubmit = (data) => {
    if (!fromDate || !toDate) {
      alert("Please select check-in and check-out dates.");
      return;
    }

    const bookingData = {
      ...data,
      fromDate: fromDate.toDateString(),
      toDate: toDate.toDateString(),

      total,
      hotel,
    };

    dispatch(addBooking(bookingData));
    setShowSuccess(true);
  };

  if (!hotel)
    return <p className="text-center my-10">Loading hotel details...</p>;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-6xl mx-auto my-10 grid grid-cols-1 lg:grid-cols-3 gap-6 px-4"
    >
      <div className="lg:col-span-2 bg-white rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-bold mb-1">Your Details</h2>
        <p className="text-sm text-gray-500 mb-6">
          Whether you are in town for business or leisure, {hotel.name} welcomes
          you with exceptional service.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <select
            {...register("title", { required: true })}
            className="border rounded-md p-2"
          >
            <option>Mr</option>
            <option>Mrs</option>
            <option>Ms</option>
          </select>
          <div>
            <input
              {...register("firstName", { required: "First name is required" })}
              placeholder="First Name"
              className="border rounded-md p-2 w-full"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm">{errors.firstName.message}</p>
            )}
          </div>
          <div>
            <input
              {...register("lastName", { required: "Last name is required" })}
              placeholder="Last Name"
              className="border rounded-md p-2 w-full"
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm">{errors.lastName.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <input
              {...register("email", { required: "Email is required" })}
              placeholder="yourmail@example.com"
              className="border rounded-md p-2 w-full"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
          <div>
            <input
              {...register("mobile", { required: "Mobile is required" })}
              placeholder="+20 000 0000 000"
              className="border rounded-md p-2 w-full"
            />
            {errors.mobile && (
              <p className="text-red-500 text-sm">{errors.mobile.message}</p>
            )}
          </div>
        </div>
        <div className="mb-6">
          <select
            {...register("country", { required: true })}
            className="border rounded-md p-2 w-full"
          >
            <option>Egypt</option>
            <option>USA</option>
            <option>Germany</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <DatePicker
            selected={fromDate}
            onChange={(date) => setFromDate(date)}
            placeholderText="Check In"
            className="border rounded-md p-2 w-full"
            dateFormat="dd MMM, yyyy"
          />
          <DatePicker
            selected={toDate}
            onChange={(date) => setToDate(date)}
            placeholderText="Check Out"
            className="border rounded-md p-2 w-full"
            dateFormat="dd MMM, yyyy"
            minDate={fromDate}
          />
        </div>

        <h3 className="text-xl font-semibold mb-4 border-t pt-6">
          Payment Details
        </h3>
        <div className="mb-4">
          <input
            type="text"
            {...register("cardNumber", {
              required: "Card number is required",
              pattern: {
                value: /^\d{16}$/,
                message: "Card number must be exactly 16 digits",
              },
            })}
            maxLength={16}
            className="border rounded-md p-2 w-full"
            placeholder="**** **** ****"
          />

          {errors.cardNumber && (
            <p className="text-red-500 text-sm">{errors.cardNumber.message}</p>
          )}
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <input
              {...register("cvv", {
                required: "CVV is required",
                pattern: {
                  value: /^\d{3,4}$/,
                  message: "CVV must be 3 or 4 digits",
                },
              })}
              placeholder="CVV"
              className="border rounded-md p-2 w-full"
            />
            {errors.cvv && (
              <p className="text-red-500 text-sm">{errors.cvv.message}</p>
            )}
          </div>
          <div>
            <input
              {...register("expiry", {
                required: "Expiry is required",
                pattern: {
                  value: /^(0[1-9]|1[0-2])\/\d{2}$/,
                  message: "Expiry format MM/YY",
                },
              })}
              placeholder="MM/YY"
              className="border rounded-md p-2 w-full"
            />
            {errors.expiry && (
              <p className="text-red-500 text-sm">{errors.expiry.message}</p>
            )}
          </div>
        </div>
        <div className="mb-6">
          <input
            {...register("cardHolder", { required: "Card holder is required" })}
            placeholder="Card Holder"
            className="border rounded-md p-2 w-full"
          />
          {errors.cardHolder && (
            <p className="text-red-500 text-sm">{errors.cardHolder.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white font-semibold py-2 rounded-md w-full hover:bg-blue-700"
        >
          PAY NOW
        </button>

        {showSuccess && (
          <p className="text-green-600 text-center mt-4 font-medium">
            Booking successful! Enjoy your stay at {hotel.name}.
          </p>
        )}
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <img
          src={hotel.images?.gallery[0]}
          alt={hotel.name}
          className="rounded-md mb-4 w-full h-40 object-cover"
        />
        <h3 className="text-lg font-bold mb-1">{hotel.name}</h3>
        <p className="text-sm text-gray-500 mb-4">{hotel.location}</p>

        <div className="text-sm space-y-2">
          <p>
            <strong>Check In:</strong> {fromDate?.toDateString() || "–"}
          </p>
          <p>
            <strong>Check Out:</strong> {toDate?.toDateString() || "–"}
          </p>
          <p>
            <strong>Price Per Night:</strong> ${hotel.pricePerNight}
          </p>
          <p>
            <strong>Nights:</strong> {getNights()}
          </p>
          <p className="font-bold text-lg border-t pt-2">Total: ${total}</p>
        </div>
      </div>
    </form>
  );
}

export default Booking;

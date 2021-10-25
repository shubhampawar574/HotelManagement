import React, { useState, useEffect } from "react";
import { Tabs } from "antd";
import axios from "axios";
//import Loader and Error from Bookingscreen.js
import Swal from "sweetalert2";
import { Tag, Divider } from "antd";
const { TabPane } = Tabs;

function Profilescreen() {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  useEffect(() => {
    if (!user) {
      window.location.href = "/login";
    }
  }, []);
  return (
    <div className="mt-3 ml-3 mr-3 bs">
      <h2 className="text-center" style={{ fontSize: "30px" }}>
        <b>Admin Panel</b>
      </h2>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Profile" key="1">
          <h1>My Profile</h1>
          <br />
          <h1>Name: {user.name}</h1>
          <h1>Email: {user.email}</h1>
          <h1>IsAdmin: {user.isAdmin ? "Yes" : "No"}</h1>
        </TabPane>
        <TabPane tab="Bookings" key="2">
          <MyBookings />
        </TabPane>
      </Tabs>
    </div>
    // Add route in App.js
  );
}

export default Profilescreen;

// Bookings list component
export function MyBookings() {
  const [bookings, setbookings] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState();
  const user = JSON.parse(localStorage.getItem("currentUser"));
  useEffect(() => {
    async function fetchdata() {
      try {
        setloading(true);
        const data = await (
          await axios.post("api/bookings/getbookingsbyuserid", {
            userid: user._id,
          })
        ).data;
        console.log(data);
        setbookings(data);
        setloading(false);
      } catch (error) {
        console.log(error);
        setloading(false);
        seterror(error);
      }
    }
    fetchdata();
  }, []);

  async function cancelbooking(bookingid, roomid) {
    try {
      setloading(true);
      const result = await (
        await axios.post("api/bookings/cancelbooking", { bookingid, roomid })
      ).data;
      console.log(result);
      setloading(false);
      Swal.fire(
        "Congratulations",
        "Your booking has been cancelled successfully",
        "success"
      ).then((result) => {
        window.location.reload();
      });
    } catch (error) {
      console.log(error);
      setloading(false);
      Swal.fire("Oops", "Something went wrong", "error");
    }
  }
  //   {
  //     /* Add the following code in bookingsRoute.js just above exports */
  //   }
  //   {
  //   /* router.post("/cancelbooking",async(req,res)=>{
  //               const {bookingid,roomid}} = req.body
  //               try {
  //                   const bookingitem=await Booking.findOne({_id : bookingid})
  //                   booking.status = 'cancelled'
  //                   await bookingitem.save()
  //                   const room=await Room.findOne({_id : roomid})
  //                   const bookings=room.currentbookings
  //                   const temp = bookings.filter(booking => booking.bookingid.toString()!==bookingid)
  //                   room.currentbookings = temp
  //                   await room.save()
  //                   res.send('Your booking cancelled successfully')
  //               } catch (error) {
  //                   return res.status(400).json({error});
  //               }
  //       }); */
  //   }
  return (
    <div className="row">
      <div className="col-md-12">
        <h1>Bookings</h1>
        {/* {loading && <Loader />} */}
        {bookings.length &&
          bookings.map((booking) => {
            return (
              <div className="bs">
                <h1>{booking.room}</h1>
                <p>
                  <b>Booking ID: {booking._id}</b>
                </p>
                <p>
                  <b>Check In: {booking.fromdate}</b>
                </p>
                <p>
                  <b>Check Out: {booking.todate}</b>
                </p>
                <p>
                  <b>Amount: {booking.totalamount}</b>
                </p>
                {booking.status == "cancelled" ? (
                  <Tag color="red">CANCELLED</Tag>
                ) : (
                  <Tag color="green">CONFIRMED</Tag>
                )}
                {booking.status !== "cancelled" && (
                  <div className="text-right">
                    {" "}
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        cancelbooking(booking._id, booking.roomid);
                      }}
                    >
                      CANCEL BOOKING
                    </button>{" "}
                  </div>
                )}
              </div>
            );
          })}
        {/* index.css
            p{
                font-size: 16px !important;
            } */}
      </div>
      {/* Add the following code in bookingsRoute.js just above exports */}
      {/* router.post("/getbookingsbyuserid",async(req,res)=>{
                const userid=req.body.userid
                try {
                    const bookings=await Bookings.find({userid : userid})
                    res.send(bookings)
                } catch (error) {
                    return res.status(400).json({error});
                }
        }); */}
    </div>
  );
}
//  In first useEffect in Bookingscreen.js add the following at the start
// if(!localStorage.getItem('currentUser')){
//     window.location.reload='/login'
// }

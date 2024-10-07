import { Card, CardBody, Input, Typography } from "@material-tailwind/react";
import CommonCard from "../../components/common/dataCard/CommonCard";
import Layout from "../../layout/Layout";
import { Link, useNavigate, useParams } from "react-router-dom";
import { MdKeyboardBackspace } from "react-icons/md";
import { useEffect, useState } from "react";
import Fields from "../../components/common/TextField/TextField";
import axios from "axios";
import BASE_URL from "../../base/BaseUrl";
import moment from "moment";
import { toast } from "react-toastify";

const title = [
  {
    value: "Mr",
    label: "Mr",
  },
  {
    value: "Ms",
    label: "Ms",
  },
  {
    value: "Mrs",
    label: "Mrs",
  },
  {
    value: "MD",
    label: "MD",
  },
];

const EditPersonalDetails = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  console.log(id, "id");

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [enquiry, setEnquiry] = useState({
    enquiry_title: "",
    enquiry_full_name: "",
    enquiry_mobile: "",
    enquiry_email: "",
  });
  const [followup, setFollowUp] = useState([]);
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("id");
    if (!isLoggedIn) {
      navigate("/");
      return;
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/api/panel-fetch-enquiry-by-id/${id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        setEnquiry(response.data.enquiry);
        setFollowUp(response.data.followup);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchData();
  }, []);

  const validateOnlyDigits = (inputtxt) => {
    var phoneno = /^\d+$/;
    if (inputtxt.match(phoneno) || inputtxt.length == 0) {
      return true;
    } else {
      return false;
    }
  };

  const onInputChange = (e) => {
    if (e.target.name == "enquiry_mobile") {
      if (validateOnlyDigits(e.target.value)) {
        setEnquiry({
          ...enquiry,
          [e.target.name]: e.target.value,
        });
      }
    } else {
      setEnquiry({
        ...enquiry,
        [e.target.name]: e.target.value,
      });
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setIsButtonDisabled(true);
    const formData = {
      enquiry_title: enquiry.enquiry_title,
      enquiry_full_name: enquiry.enquiry_full_name,
      enquiry_mobile: enquiry.enquiry_mobile,
      enquiry_email: enquiry.enquiry_email,
    };
    console.log("debug", formData);
    try {
      const response = await axios.put(
        `${BASE_URL}/api/panel-update-enquiry-personal/${id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.data.code == 200) {
        toast.success("Data Updated Successfully");
        navigate("/openList-enquiry");
      } else {
        if (response.data.code == 401) {
          toast.error("Enquiry Duplicate Entry");
        } else if (response.data.code == 402) {
          toast.error("Enquiry Duplicate Entry");
        } else {
          toast.error("Enquiry Duplicate Entry");
        }
      }
    } catch (error) {
      console.error("Error updating Enquiry:", error);
      toast.error("Error updating Enquiry");
    } finally {
      setIsButtonDisabled(false);
    }
  };


const handleBackButton =()=>{
    navigate(-1)
}


  return (
    <Layout>
      <div>
        <div>
          {/* Title */}
          <div className="flex mb-4 mt-6">
          
              <MdKeyboardBackspace onClick={handleBackButton} className=" text-white bg-[#464D69] p-1 w-10 h-8 cursor-pointer rounded-2xl" />
       
            <h1 className="text-2xl text-[#464D69] font-semibold ml-2 content-center">
            Edit Personal Details
            </h1>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2 ">
              <Card className="mt-4">
                <CardBody>
                  <div className="grid grid-cols-1 md:grid-cols-2 h-[300px] gap-4">
                    {" "}
                    <div className="space-y-2">
                      <Typography className="text-black">
                        <strong>Enquiry No : {enquiry.enquiry_no} </strong>
                      </Typography>
                      <Typography className="text-black">
                        <strong>Enquiry Date : {enquiry.enquiry_date}</strong>
                      </Typography>
                      <Typography className="text-black">
                        <strong>Course : {enquiry.enquiry_course}</strong>
                      </Typography>
                      <Typography className="text-black">
                        <strong>Source : {enquiry.enquiry_source}</strong>
                      </Typography>
                      <Typography className="text-black">
                        <strong>Status : {enquiry.enquiry_status}</strong>
                      </Typography>
                      <Typography className="text-black">
                        <strong>New Followup Date : {moment(enquiry.enquiry_follow_date).format('DD-MM-YYYY')}</strong>
                      </Typography>
                    
                    </div>
                    <div className="space-y-2">
                      <Typography className="text-black">
                        <strong>Full Name : {enquiry.enquiry_full_name}</strong>{" "}
                      </Typography>
                      <Typography className="text-black">
                        <strong>Mobile : {enquiry.enquiry_mobile}</strong>{" "}
                      </Typography>
                      <Typography className="text-black">
                        <strong>Email : {enquiry.enquiry_email}</strong>
                      </Typography>
                      <Typography className="text-black">
                        <strong>Category : {enquiry.enquiry_category}</strong>{" "}
                      </Typography>
                      <Typography className="text-black">
                        <strong>
                          City/Country : {enquiry.enquiry_city}/
                          {enquiry.enquiry_country}
                        </strong>
                      </Typography>
                      <Typography className="text-black">
                        <strong>Remarks : {enquiry.enquiry_remarks}</strong>
                      </Typography>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
            <div className="p-6 mt-3 bg-white shadow-md rounded-lg">
              <form id="addIndiv" autoComplete="off">
                <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mb-6">
                  <div className="form-group">
                    <Fields
                      required={true}
                      title="Title"
                      type="whatsappDropdown"
                      autoComplete="Name"
                      name="enquiry_title"
                      value={enquiry.enquiry_title}
                      onChange={(e) => onInputChange(e)}
                      options={title}
                    />
                  </div>

                  <div>
                    <Input
                      required
                      label="Full Name"
                      type="text"
                      name="enquiry_full_name"
                      value={enquiry.enquiry_full_name}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
                  <div>
                    <Input
                      label="Mobile No"
                      required
                      maxLength={10}
                      type="tel"
                      autoComplete="Name"
                      name="enquiry_mobile"
                      value={enquiry.enquiry_mobile}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      label="Email"
                      required
                      autoComplete="Name"
                      name="enquiry_email"
                      value={enquiry.enquiry_email}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
                </div>
                <div className="mt-4 text-center">
                 
                  <button
                    onClick={onSubmit}
                    className="bg-[#5D92F4] text-white px-4 py-2 rounded-md"
                  >
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="p-3 mt-3 bg-white shadow-md rounded-lg">
            <div className="flex justify-center">
              <h1 className="text-black text-2xl">FOLLOW UP</h1>
            </div>
            <div class="container mx-auto p-4">
              <div class="overflow-x-auto">
                {followup.length > 0 ? (
                  <table class="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
                    <thead>
                      <tr class="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                        <th class="py-3 px-6 text-left">Followup Date</th>
                        <th class="py-3 px-6 text-left">Next Followup Date</th>
                        <th class="py-3 px-6 text-center">Time</th>
                        <th class="py-3 px-6 text-center">Type</th>
                        <th class="py-3 px-6 text-center">Description</th>
                      </tr>
                    </thead>
                    <tbody class="text-gray-600 text-sm font-light">
                      {followup.map((dataSumm, key) => (
                        <tr class="border-b border-gray-200 hover:bg-gray-100">
                          <td class="py-3 px-6 text-left whitespace-nowrap">
                            <div class="flex items-center">
                              <span class="font-medium">
                                {dataSumm.follow_up_date == null
                                  ? ""
                                  : moment(dataSumm.follow_up_date).format(
                                      "DD-MM-YYYY"
                                    )}
                              </span>
                            </div>
                          </td>
                          <td class="py-3 px-6 text-left">
                            <div class="flex items-center">
                              <span>
                                {dataSumm.follow_up_next_date == null
                                  ? ""
                                  : moment(dataSumm.follow_up_next_date).format(
                                      "DD-MM-YYYY"
                                    )}
                              </span>
                            </div>
                          </td>
                          <td class="py-3 px-6 text-center">
                            <span>{dataSumm.follow_up_time}</span>
                          </td>
                          <td class="py-3 px-6 text-center">
                            <span>{dataSumm.follow_up_type}</span>
                          </td>
                          <td class="py-3 px-6 text-center">
                            <span>{dataSumm.follow_up_sub_type}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <div className="flex justify-center">
                    <h1 className="text-black text-2xl">No Data Available</h1>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EditPersonalDetails;

import React from "react";
import CountUp from "react-countup";
import Layout from "../../layout/Layout";

const Home = () => {
  const amount = 100;

  return (
    <Layout>
      <div className="mt-12 ">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          <div class="bg-white text-[#464D69] shadow-lg rounded-lg p-3 font-semibold text-center">
            <h1 class="text-md ">Total Enquires</h1>
            <h1 class="text-2xl  text-[#727891]">
              <CountUp start={0} end={amount} />
            </h1>
          </div>
          <div class="bg-white text-[#464D69] shadow-lg rounded-lg p-3 font-semibold text-center">
            <h1 class="text-md ">Total Student</h1>
            <h1 class="text-2xl  text-[#727891]">Inspection</h1>
          </div>
          <div class="bg-white text-[#464D69] shadow-lg rounded-lg p-3 font-semibold text-center">
            <h1 class="text-md ">Open Enquires</h1>
            <h1 class="text-2xl text-[#727891]">Inspection</h1>
          </div>
          <div class="bg-white text-[#464D69] shadow-lg rounded-lg p-3 font-semibold text-center">
            <h1 class="text-md ">Overdue Enquires</h1>
            <h1 class="text-2xl text-[#727891]">Inspection</h1>
          </div>
          <div class="bg-white text-[#464D69] shadow-lg rounded-lg p-3 font-semibold text-center">
            <h1 class="text-md ">Pending Task</h1>
            <h1 class="text-2xl text-[#727891]">Inspection</h1>
          </div>
          <div class="bg-white text-[#464D69] shadow-lg rounded-lg p-3 font-semibold text-center">
            <h1 class="text-md ">Inspection Task</h1>
            <h1 class="text-2xl text-[#727891]">Inspection</h1>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mt-3 ">
          <div class="bg-white text-[#464D69] shadow-lg rounded-lg p-3 font-semibold text-center">
            <h1 class="text-md ">Pending Onboarding</h1>
            <h1 class="text-2xl text-[#727891]">Inspection</h1>
          </div>
          <div class="bg-white text-[#464D69] shadow-lg rounded-lg p-3 font-semibold text-center">
            <h1 class="text-md ">Pending Delivery</h1>
            <h1 class="text-2xl text-[#727891]">Inspection</h1>
          </div>
          <div class="bg-white text-[#464D69] shadow-lg rounded-lg p-3 font-semibold text-center">
            <h1 class="text-md ">Pending Request</h1>
            <h1 class="text-2xl text-[#727891]">Inspection</h1>
          </div>
          <div class="bg-white text-[#464D69] shadow-lg rounded-lg p-3 font-semibold text-center">
            <h1 class="text-md ">Pending Exam</h1>
            <h1 class="text-2xl text-[#727891]">Inspection</h1>
          </div>
          <div class="bg-white text-[#464D69] shadow-lg rounded-lg p-3 font-semibold text-center">
            <h1 class="text-md ">Pending Offboarding</h1>
            <h1 class="text-2xl text-[#727891]">Inspection</h1>
          </div>
          <div class="bg-white text-[#464D69] shadow-lg rounded-lg p-3 font-semibold text-center">
            <h1 class="text-md ">Pending Interview</h1>
            <h1 class="text-2xl text-[#727891]">Inspection</h1>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mt-3 ">
          <div class="bg-white text-[#464D69] shadow-lg rounded-lg p-3 font-semibold text-center">
            <h1 class="text-md ">Course Due</h1>
            <h1 class="text-2xl text-[#727891]">Inspection</h1>
          </div>
          <div class="bg-white text-[#464D69] shadow-lg rounded-lg p-3 font-semibold text-center">
            <h1 class="text-md ">Overdue Task</h1>
            <h1 class="text-2xl text-[#727891]">Inspection</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;

import React from "react";
import { Link } from "react-router-dom";

const WelcomeDashboard = () => {
  return (
    <div class="flex items-center h-screen">
      <div class="flex flex-col justify-center mx-auto">
        <section class="rounded-3xl max-w-screen-lg shadow-2xl">
          <div class="p-8 text-center sm:p-12">
            <p class="text-sm font-semibold uppercase tracking-widest text-pink-500">
              Welcome in dashboard
            </p>
            <h2 class="mt-6 text-3xl font-bold">
              Stay on track with our smartwatch dashboard
            </h2>
            <Link
              class="mt-8 inline-block w-1/2 rounded-full bg-pink-600 py-4 text-sm font-bold text-white shadow-xl"
              to={"/dashboard/myOrders"}
            >
              Track Orders
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WelcomeDashboard;

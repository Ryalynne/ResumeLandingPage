import React from "react";
import Image from "next/image";
export default function Projects() {
  return (
    <div className="bg-black-400 text-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
              className=" object-cover object-center"
              src="/images/milktea.png"
              alt="Milk Tea Ordering System"
              width={1920}
              height={1080}
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Milk Tea Ordering System
              </h3>
              <p className="text-gray-700">
                An intuitive POS and inventory system tailored for milk tea
                shops, facilitating seamless order management and inventory
                tracking.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
              className=" object-cover object-center"
              src="/images/POSANDINVENTORY.jpg"
              alt="Mini-Grocery POS with Barcode Scanner"
              width={1920}
              height={1080}
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Mini-Grocery POS with Barcode Scanner
              </h3>
              <p className="text-gray-700">
                A comprehensive POS and inventory management solution designed
                for mini-grocery stores, featuring integrated barcode scanning
                capabilities for efficient checkout processes.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
              className=" object-cover object-center"
              src="/images/cleranceSystem.png"
              alt="Employee Clearance System"
              width={1920}
              height={1080}
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Clearance System</h3>
              <p className="text-gray-700">
                An automated clearance system for managing employee departures,
                streamlining the process and ensuring compliance with company
                protocols.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
              className=" object-cover object-center"
              src="/images/BMALanding.png"
              alt="Employee Clearance System"
              width={1920}
              height={1080}
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                BMA PORTAL LANDING PAGE
              </h3>
              <p className="text-gray-700">
                A modern and visually captivating landing page for the BMA
                Portal, designed to provide employees with seamless access to
                essential resources and information. Featuring intuitive
                navigation and a sleek interface, the landing page enhances user
                experience and fosters engagement with company protocols and
                updates.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
              className=" object-cover object-center"
              src="/images/BMALibrary.png"
              alt="Employee Clearance System"
              width={1920}
              height={1080}
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">BMA LIBRARY SYSTEM</h3>
              <p className="text-gray-700">
                An automated clearance system for managing employee departures,
                streamlining the process and ensuring compliance with company
                protocols.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
              className=" object-cover object-center filter grayscale blur-md contrast-50"
              src="/images/cleranceSystem.png"
              alt="Employee Clearance System"
              width={1920}
              height={1080}
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">WARNING</h3>
              <p className="text-gray-700">
                OTHER SYSTEM IS NOT AVAIABLE DUE TO PRIVACY
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

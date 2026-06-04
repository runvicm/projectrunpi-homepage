import { TriangleAlert } from "lucide-react";
import React from "react";
import { Await, useLoaderData } from "react-router";
import { DevLogCardSkeleton } from "../blocks/cards/DevLogCardSkeleton";
import { DevLogCard, type DevLogProps } from "../blocks/cards/DevLogCard";


export const Devlog = () => {
  const { devlog } = useLoaderData<{devlog: DevLogProps[]}>();

  return (
    <section className="pb-24 bg-linear-to-b from-blue-50 via-cyan-100 to-teal-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold  text-teal-700 mb-4">Latest Updates</h3>
          <p className="text-gray-600 text-lg">Latest updates, technical changes, and project development notes.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <React.Suspense fallback={
            Array.from({ length: 3 }).map((_, index) => (
              <div key={index}>
                <DevLogCardSkeleton />
              </div>
            ))
          }>
            <Await
              resolve={devlog}
              errorElement={
                Array.from({ length: 3 }).map((_, index) => (
                  <div key={index}>
                    <DevLogCardSkeleton />
                    <div className="flex justify-center gap-1 mt-5">
                      <p className="bg-red-300 flex items-center gap-1 px-3 py-1.5 rounded-full border border-teal-200 text-slate-500 text-sm">
                        <span className="text-red-700 flex gap-2 items-center"><TriangleAlert size={16} />Service is temporarily unavailable. Please try again later.</span> 
                      </p>
                    </div>
                  </div>
                ))
              }
              children={(devlog) => {
                return devlog.map((log, index) => (
                  <div key={index}>
                    <DevLogCard log={log} />
                  </div>          
                ))
              }}
            />
          </React.Suspense>
        </div>
      </div>
    </section>
  )
}
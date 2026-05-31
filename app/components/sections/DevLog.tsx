import { Eye, Info, Logs, TriangleAlert } from "lucide-react";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";

interface LogProps {
  title: string;
  slug: string;
  overview: string;
  content: string;
  view_count: number;
  published_at: string;
  tags: {
    slug: string;
  }[];
  url: string;
}

const TAG_COLOR = [
  'bg-teal-500/20 text-teal-400',
  'bg-blue-500/20 text-blue-400',
  'bg-green-500/20 text-green-400',
  'bg-yellow-500/20 text-yellow-400',
  'bg-orange-500/20 text-orange-400',
  'bg-red-500/20 text-red-400',
  'bg-pink-500/20 text-pink-400',
] as const;


export const Devlog = () => {
  const [logs, setLogs] = useState<LogProps[] | null>(null);

  useEffect(() => {
    fetch("/api/devlog")
      .then(res => {
        if (!res.ok) return null;
        return res.json();
      })
    .then((data: unknown) => {
      if (data) setLogs(data as LogProps[]);
    })
  }, []);

  let tagColorIndex = 0;
  const getTagColor = (index: number) => {
    return TAG_COLOR[index % TAG_COLOR.length];
  } 

  const handleClick = (slug: string , e: React.MouseEvent<HTMLAnchorElement>) => {

    e.preventDefault();
      const href = e.currentTarget.href; // save it here

      fetch(`/api/devlog/view/${slug}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug }),
      }).finally(() => {
        window.location.href = href;
      });
  };

  return (
    <section className="pb-24 bg-linear-to-b from-blue-50 via-cyan-100 to-teal-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold  text-teal-700 mb-4">Latest Updates</h3>
          <p className="text-gray-600 text-lg">Latest updates, technical changes, and project development notes.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          {logs && logs.map((log, index) => (

            <div key={index} className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-red-500 hover:shadow-xl transition-all flex flex-col h-full">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
                  </svg>
                  <span>{log.published_at}</span>
                </div>

                <div className="flex gap-2">
                  {log.tags && log.tags.length > 0 ? (
                    log.tags.map(tag => {
                      const colorClass = getTagColor(tagColorIndex);
                      tagColorIndex++;
                      return (
                        <div key={tag.slug} className={`px-2 py-1 ${colorClass} text-xs rounded font-medium`}>
                          <span  className="tag ms-1">
                            #{tag.slug}
                          </span>
                        </div>
                      );
                        
                    })
                  ) : (
                    <div>
                      <span className="text-teal-500">No tag</span>
                    </div>
                  )}
                </div>
                
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{log.title}</h4>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed grow">{log.overview}</p>
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  {/* <div className="flex items-center gap-1">
                    <Heart size={16} fill="#fb2c36"  />
                    <span>0</span>
                  </div> */}
                  <div className="flex items-center gap-1">
                    <Eye size={16} />
                    <span>{log.view_count}</span>
                  </div>
                </div>
                <a href={`https://devlog.projectrunpi.com/${log.slug}`} className="text-blue-400 text-sm font-medium hover:text-blue-300 transition" onClick={(e) => handleClick(log.slug, e)}>Read more →</a>
              </div>
            </div>
          ))}

          {!logs || logs.length === 0 ? (
            Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-red-500 hover:shadow-xl transition-all flex flex-col h-full items-center justify-center">
                <h4 className="text-xl font-bold text-gray-600 mb-3">No Update</h4>
            </div>
            ))
          ) : logs && logs.length % 3 !== 0 && (
            Array.from({ length: 3 - (logs.length % 3) }).map((_, index) => (
              <div key={index} className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-red-500 hover:shadow-xl transition-all flex flex-col h-full items-center justify-center">
                  <h4 className="text-xl font-bold text-gray-600 mb-3">No Update</h4>
              </div>
            ))
          )}
        </div>

        {!logs && (
          <div className="flex justify-center gap-1 mt-5">
            <p className="bg-red-300 flex items-center gap-1 px-3 py-1.5 rounded-full border border-teal-200 text-slate-500 text-sm">
              <span className="text-red-700 flex gap-2 items-center"><TriangleAlert size={16} />Service is temporarily unavailable. Please try again later.</span> 
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
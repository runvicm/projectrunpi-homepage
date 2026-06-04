import { Eye } from "lucide-react";
import { useFetcher } from "react-router";

export interface DevLogProps {
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

const getTagColor = (index: number) => {
  return TAG_COLOR[index % TAG_COLOR.length];
} 

export const DevLogCard = ({ log }: { log: DevLogProps }) => {
  const fetcher = useFetcher();

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-red-500 hover:shadow-xl transition-all flex flex-col h-full">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
          </svg>
          <span>{log.published_at}</span>
        </div>

        <div className="flex gap-2">
          {log.tags && log.tags.length > 0 ? (
            log.tags.map((tag, tagIndex) => {
              const colorClass = getTagColor(tagIndex);
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
      
          <div className="flex items-center gap-1">
            <Eye size={16} />
            <span>{log.view_count}</span>
          </div>
        </div>
        <a
          href={`https://devlog.projectrunpi.com/view/${log.slug}`}
          onClick={() => fetcher.submit({ slug: log.slug }, { method: "post", action: "/" })}
          className="text-blue-400 text-sm font-medium hover:text-blue-300 transition"
        >Read more →</a>
      </div>
    </div>
  )
}
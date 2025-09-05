"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface EasingSelectorProps {
  easingKey: string;
  onChange: (key: string) => void;
}

// 完整 40+ 曲线，中文 + key
export const easingFunctions = [
  // Linear 单独一行
  { key: "linear", label: "线性 (Linear)" },

  // Quad
  { key: "easeInQuad", label: "二次方缓入 (Quad In)" },
  { key: "easeOutQuad", label: "二次方缓出 (Quad Out)" },
  { key: "easeInOutQuad", label: "二次方缓入缓出 (Quad InOut)" },
  { key: "easeOutInQuad", label: "二次方缓出缓入 (Quad OutIn)" },

  // Cubic
  { key: "easeInCubic", label: "三次方缓入 (Cubic In)" },
  { key: "easeOutCubic", label: "三次方缓出 (Cubic Out)" },
  { key: "easeInOutCubic", label: "三次方缓入缓出 (Cubic InOut)" },
  { key: "easeOutInCubic", label: "三次方缓出缓入 (Cubic OutIn)" },

  // Quart
  { key: "easeInQuart", label: "四次方缓入 (Quart In)" },
  { key: "easeOutQuart", label: "四次方缓出 (Quart Out)" },
  { key: "easeInOutQuart", label: "四次方缓入缓出 (Quart InOut)" },
  { key: "easeOutInQuart", label: "四次方缓出缓入 (Quart OutIn)" },

  // Quint
  { key: "easeInQuint", label: "五次方缓入 (Quint In)" },
  { key: "easeOutQuint", label: "五次方缓出 (Quint Out)" },
  { key: "easeInOutQuint", label: "五次方缓入缓出 (Quint InOut)" },
  { key: "easeOutInQuint", label: "五次方缓出缓入 (Quint OutIn)" },

  // Expo
  { key: "easeInExpo", label: "指数缓入 (Expo In)" },
  { key: "easeOutExpo", label: "指数缓出 (Expo Out)" },
  { key: "easeInOutExpo", label: "指数缓入缓出 (Expo InOut)" },
  { key: "easeOutInExpo", label: "指数缓出缓入 (Expo OutIn)" },

  // Circ
  { key: "easeInCirc", label: "圆形缓入 (Circ In)" },
  { key: "easeOutCirc", label: "圆形缓出 (Circ Out)" },
  { key: "easeInOutCirc", label: "圆形缓入缓出 (Circ InOut)" },
  { key: "easeOutInCirc", label: "圆形缓出缓入 (Circ OutIn)" },

  // Back
  { key: "easeInBack", label: "回弹缓入 (Back In)" },
  { key: "easeOutBack", label: "回弹缓出 (Back Out)" },
  { key: "easeInOutBack", label: "回弹缓入缓出 (Back InOut)" },
  { key: "easeOutInBack", label: "回弹缓出缓入 (Back OutIn)" },

  // Elastic
  { key: "easeInElastic", label: "弹性缓入 (Elastic In)" },
  { key: "easeOutElastic", label: "弹性缓出 (Elastic Out)" },
  { key: "easeInOutElastic", label: "弹性缓入缓出 (Elastic InOut)" },
  { key: "easeOutInElastic", label: "弹性缓出缓入 (Elastic OutIn)" },

  // Bounce
  { key: "easeInBounce", label: "弹跳缓入 (Bounce In)" },
  { key: "easeOutBounce", label: "弹跳缓出 (Bounce Out)" },
  { key: "easeInOutBounce", label: "弹跳缓入缓出 (Bounce InOut)" },
  { key: "easeOutInBounce", label: "弹跳缓出缓入 (Bounce OutIn)" },
];

export default function EasingSelector({ easingKey, onChange }: EasingSelectorProps) {
  const [open, setOpen] = useState(false);

  const linearItem = easingFunctions[0];
  const otherItems = easingFunctions.slice(1);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-md bg-white dark:bg-slate-900 text-sm"
      >
        {easingFunctions.find((e) => e.key === easingKey)?.label || "选择缓动曲线"}
        <ChevronDown className="ml-2 h-4 w-4" />
      </button>

      {open && (
        <div
          className="absolute mt-2 max-w-[95vw] w-auto rounded-md shadow-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 max-h-80 overflow-x-auto overflow-y-auto z-50 p-2"
          onWheel={(e) => e.stopPropagation()}
        >
          {/* Linear 单独一行 */}
          <div
            className={`px-2 py-1 cursor-pointer text-sm rounded hover:bg-slate-100 dark:hover:bg-slate-700 whitespace-nowrap ${
              easingKey === linearItem.key ? "font-bold text-blue-600" : ""
            }`}
            onClick={() => {
              onChange(linearItem.key);
              setOpen(false);
            }}
          >
            {linearItem.label}
          </div>

          {/* 按分组渲染其他曲线 */}
          {["Quad", "Cubic", "Quart", "Quint", "Expo", "Circ", "Back", "Elastic", "Bounce"].map((group) => {
            const items = otherItems.filter((item) => item.label.includes(group));
            if (items.length === 0) return null;
            return (
              <div key={group} className="mt-3">
                <div className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">{group}</div>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-2">
                  {items.map((item) => (
                    <div
                      key={item.key}
                      className={`px-2 py-1 cursor-pointer text-sm rounded hover:bg-slate-100 dark:hover:bg-slate-700 whitespace-nowrap ${
                        easingKey === item.key ? "font-bold text-blue-600" : ""
                      }`}
                      onClick={() => {
                        onChange(item.key);
                        setOpen(false);
                      }}
                    >
                      {item.label}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

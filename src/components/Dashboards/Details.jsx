import React from 'react';

const DetailsBox = ({
  data,
  colors = [],
  withBorder = false,
  paddingX = 'px-4',
  paddingY = 'py-4',
}) => (
  <div className={`${paddingX} ${paddingY} ${withBorder ? 'border border-black rounded-2xl' : ''}`}>
    <ul className="space-y-2">
      {data.map((item, index) => (
        <li key={index} className="flex items-center">
          <span
            className="w-4 h-4 mr-8 rounded-lg"
            style={{ backgroundColor: colors[index] }}
          ></span>
          <span className="flex-1 flex justify-between items-center">
            <span className="pr-12">{item.label}</span>
            <span className="text-right">{item.value}%</span>
          </span>
        </li>
      ))}
    </ul>
  </div>
);

export default DetailsBox;

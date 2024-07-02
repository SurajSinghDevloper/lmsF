// import React from 'react';
// import { Button } from '@nextui-org/react';

// const ReusableTable = ({ columns, data, actions }) => {
//     return (
//         <div className="overflow-x-auto mt-5">
//             <table className="min-w-full bg-white dark:bg-zinc-200">
//                 <thead>
//                     <tr className="w-full bg-zinc-200 dark:bg-zinc-300">
//                         {columns.map((column, index) => (
//                             <th key={index} className="py-2 px-4 text-center text-blue-600 dark:text-blue-400">{column.header}</th>
//                         ))}
//                         {actions && <th className="py-2 px-4 text-center text-blue-600 dark:text-blue-400">Actions</th>}
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {data.map((item, index) => (
//                         <tr key={index} className="border-b border-zinc-200 dark:border-zinc-700">
//                             {columns.map((column, colIndex) => (
//                                 <td key={colIndex} className="py-2 px-4 text-center">{item[column.accessor]}</td>
//                             ))}
//                             {actions && (
//                                 <td className="py-2 justify-center flex gap-3">
//                                     {actions.map((action, actionIndex) => (
//                                         <Button key={actionIndex} color={action.color} variant="bordered" onClick={() => action.handler(item)}>
//                                             {action.label}
//                                         </Button>
//                                     ))}
//                                 </td>
//                             )}
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default ReusableTable;






import React from 'react';
import { Button } from '@nextui-org/react';

const ReusableTable = ({ columns, data, actions }) => {
    return (
        <div className="overflow-x-auto mt-5">
            <table className="min-w-full bg-white dark:bg-zinc-200">
                <thead>
                    <tr className="w-full bg-zinc-200 dark:bg-zinc-300">
                        {columns.map((column, index) => (
                            <th key={index} className="py-2 px-4 text-center text-blue-600 dark:text-blue-400">
                                {column.header}
                            </th>
                        ))}
                        {actions && (
                            <th className="py-2 px-4 text-center text-blue-600 dark:text-blue-400">
                                Actions
                            </th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, rowIndex) => (
                        <tr key={rowIndex} className="border-b border-zinc-200 dark:border-zinc-700">
                            {columns.map((column, colIndex) => (
                                <td key={colIndex} className="py-2 px-4 text-center">
                                    {typeof column.accessor === 'function'
                                        ? column.accessor(item)
                                        : item[column.accessor]}
                                </td>
                            ))}
                            {actions && (
                                <td className="py-2 justify-center flex gap-3">
                                    {actions.map((action, actionIndex) => (
                                        <Button
                                            key={actionIndex}
                                            color={action.color}
                                            variant="bordered"
                                            onClick={() => action.handler(item)}
                                        >
                                            {action.label}
                                        </Button>
                                    ))}
                                </td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ReusableTable;

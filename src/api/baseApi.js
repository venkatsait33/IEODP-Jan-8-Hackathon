import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const baseApi = createApi({
//     reducerPath: "api",
//     baseQuery: fetchBaseQuery({
//         baseUrl: import.meta.env.VITE_API_URL,
//         prepareHeaders: (headers, { getState }) => {
//             const token = getState().auth.token;
//             if (token) {
//                 headers.set("authorization", `Bearer ${token}`);
//             }
//             return headers;
//         },
//     }),
//     tagTypes: [
//         "Users",
//         "Workflows",
//         "Tasks",
//         "Approvals",
//         "Insights",
//         "Audits",
//     ],
//     endpoints: () => ({}),
// });


export const baseApi = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_API_URL, // MUST be http://localhost:5000
        prepareHeaders: (headers) => headers,
    }),
    tagTypes: [
        "Users",
        "Approvals",
        "Insights",
        "Audits",
        "Tickets", // 🔥 REQUIRED
    ],
    endpoints: () => ({}),
});

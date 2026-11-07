// function App() {

//   return (

//     <div>



//   <div className="relative text-white">

//     <svg className="hidden">

//       <symbol

//         id="arrow-right"

//         fill="none"

//         viewBox="0 0 24 24"

//         strokeWidth="1.5"

//         stroke="currentColor"

//       >

//         <path

//           strokeLinecap="round"

//           strokeLinejoin="round"

//           d="m8.25 4.5 7.5 7.5-7.5 7.5"

//         />

//       </symbol>

//       <symbol

//         id="arrow-left"

//         fill="none"

//         viewBox="0 0 24 24"

//         strokeWidth="1.5"

//         stroke="currentColor"

//       >

//         <path

//           strokeLinecap="round"

//           strokeLinejoin="round"

//           d="M15.75 19.5 8.25 12l7.5-7.5"

//         />

//       </symbol>

//       <symbol

//         id="moon"

//         xmlns="http://www.w3.org/2000/svg"

//         fill="none"

//         viewBox="0 0 24 24"

//         strokeWidth="1.5"

//         stroke="currentColor"

//       >

//         <path

//           strokeLinecap="round"

//           strokeLinejoin="round"

//           d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"

//         />

//       </symbol>

//       <symbol

//         id="sun"

//         xmlns="http://www.w3.org/2000/svg"

//         fill="none"

//         viewBox="0 0 24 24"

//         strokeWidth="1.5"

//         stroke="currentColor"

//       >

//         <path

//           strokeLinecap="round"

//           strokeLinejoin="round"

//           d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"

//         />

//       </symbol>

//     </svg>



//     <div className="layout">

//       {/* ================= SIDEBAR ================= */}



//       <section id="sidebar-container" className="invisible sidebar-container z-50">

//         {/* Data Loaded By Js */}

//       </section>



//       {/* Mobile sidebar */}

//       <section id="mobile-sidebar-container" className="relative invisible">

//         {/* Data loaded By JS */}

//       </section>

//      {/* ================= MAIN ================= */}



//       <main className="main">

//         {/* Header */}

//         <header

//           className="sticky top-0 z-40 relative -mx-8 px-6 py-1.5 mb-8 flex items-center justify-between bg-white/95 backdrop-blur-md border-b border-slate-200 dark:bg-zinc-800/95 dark:border-zinc-700"

//         >

//         <button

//             id="theme-toggle"

//             type="button"

//             className="theme-toggle relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-slate-300 bg-white text-slate-700 shadow-sm transition-colors hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-indigo-500 dark:border-white/20 dark:bg-zinc-800 dark:text-amber-100 dark:hover:bg-zinc-700"

//             aria-label="Switch to dark mode"

//             title="Switch theme"

//           >

//             {/* Moon */}

//             <span

//               className="icon-orbit moon-orbit pointer-events-none absolute inset-0 translate-x-2.5 translate-y-12"

//             >

//               <span

//                 className="orbit-traveler moon-traveler absolute left-1/2 top-1/2 flex size-5 items-center justify-center -translate-x-1/2 -translate-y-1/2"

//               >

//                 <svg

//                   xmlns="http://www.w3.org/2000/svg"

//                   viewBox="0 0 24 24"

//                   fill="currentColor"

//                   className="theme-icon moon-icon size-4 block shrink-0"

//                 >

//                   <path

//                     fillRule="evenodd"

//                     d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z"

//                     clipRule="evenodd"

//                   />

//                 </svg>

//               </span>

//             </span>



//             {/* Sun */}

//             <span

//               className="icon-orbit sun-orbit pointer-events-none absolute inset-0 translate-x-2.5 translate-y-12"

//             >

//               <span

//                 className="orbit-traveler sun-traveler absolute left-1/2 top-1/2 flex size-5 items-center justify-center -translate-x-1/2 -translate-y-1/2"

//               >

//                 <svg

//                   xmlns="http://www.w3.org/2000/svg"

//                   viewBox="0 0 24 24"

//                   fill="currentColor"

//                   className="theme-icon sun-icon size-5 block shrink-0"

//                 >

//                   <path

//                     d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z"

//                   />

//                 </svg>

//               </span>

//             </span>

//           </button>

//           <div className="flex items-center gap-4">

//             <input

//               className="hidden md:block w-72 px-4 py-3 rounded-xl border outline-1 outline-black/20 dark:outline-white/50 focus:ring-2 focus:ring-indigo-500 text-gray-500"

//               placeholder="Search..."

//             />



//             <button

//               id="message-notif"

//               className="message-notif relative w-12 h-12 rounded-xl border border-black/40 dark:border-white/50 shadow-sm dark:shadow-white/10 transition-all duration-100 hover:shadow-md dark:hover:shadow-white/20 active:translate-y-0.5 active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.25)] dark:active:shadow-[inset_0_2px_4px_rgba(255,255,255,0.15)]"

//             >

//               🔔

//               <span

//                 id="unread-message-count"

//                 className="absolute -right-1 -top-1 hidden min-w-5 rounded-full bg-orange-500 px-1.5 py-0.5 text-center text-[10px] font-bold leading-none text-white"

//               >

//                 0

//               </span>

//             </button>

//             <div

//               className="relative flex items-center justify-between bg-transparent gap-2 md:w-48 h-12 md:gap-0.5 md:pr-2 pl-1 shrink-0 border-l border-zinc-600/20 dark:border-white/40"

//             >

//               <div className="shrink-0">

//                 {/* User profile button */}



//                 <img

//                   src="/images/default-profile.png"

//                   className="user-image block h-12 w-12 rounded-full object-cover bg-indigo-600"

//                   alt="user-image"

//                 />



//                 {/* User menu */}

//                 <div

//                   className="user-menu hidden absolute right-0 top-full z-50 mt-3 w-64 overflow-hidden rounded-2xl border border-black/10 bg-white shadow-xl shadow-black/10 dark:border-white/10 dark:bg-[#151B23] dark:shadow-black/30"

//                 >

//                   {/* User info */}

//                   <div

//                     className="border-b border-black/10 px-5 py-1 dark:border-white/10"

//                   >

//                     <div className="flex items-center gap-3">

//                       <img

//                         src="/images/default-profile.png"

//                         className="user-image h-12 w-12 rounded-full object-cover bg-indigo-600"

//                         alt="user-image"

//                       />



//                       <div className="min-w-0">

//                         <p

//                           className="user-name truncate text-sm font-semibold text-gray-900 dark:text-white"

//                         ></p>



//                         <p

//                           className="user-role truncate text-xs text-gray-500 dark:text-gray-400"

//                         ></p>



//                         <p

//                           className="user-email truncate text-xs text-gray-400 dark:text-gray-500"

//                         ></p>

//                       </div>

//                     </div>

//                   </div>



//                   {/* Menu items */}

//                   <div className="p-1.5">

//                     <a

//                       href="#"

//                       id="profile-menu-item"

//                       className="flex w-full items-center gap-3 rounded-xl px-3 py-1 text-sm font-medium text-gray-700 transition-colors hover:bg-black/5 dark:text-gray-200 dark:hover:bg-white/5"

//                     >

//                       <span

//                         className="flex h-6 w-6 items-center justify-center rounded-lg bg-transparent"

//                       >

//                         <svg

//                           xmlns="http://www.w3.org/2000/svg"

//                           fill="none"

//                           viewBox="0 0 24 24"

//                           strokeWidth="1.5"

//                           stroke="currentColor"

//                           className="dark:text-white"

//                         >

//                           <path

//                             strokeLinecap="round"

//                             strokeLinejoin="round"

//                             d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"

//                           />

//                         </svg>

//                       </span>



//                       <span>My Profile</span>

//                     </a>



//                     <a

//                       href="../Settings-page/settings.html"

//                       id="settings-menu-item"

//                       className="flex w-full items-center gap-3 rounded-xl px-3 py-1 text-sm font-medium text-gray-700 transition-colors hover:bg-black/5 dark:text-gray-200 dark:hover:bg-white/5"

//                     >

//                       <span

//                         className="flex h-6 w-6 items-center justify-center rounded-lg"

//                       >

//                         <svg

//                           xmlns="http://www.w3.org/2000/svg"

//                           fill="none"

//                           viewBox="0 0 24 24"

//                           strokeWidth="1.5"

//                           stroke="currentColor"

//                           className="dark:text-white"

//                         >

//                           <path

//                             strokeLinecap="round"

//                             strokeLinejoin="round"

//                             d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"

//                           />

//                           <path

//                             strokeLinecap="round"

//                             strokeLinejoin="round"

//                             d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"

//                           />

//                         </svg>

//                       </span>



//                       <span>Settings</span>

//                     </a>

//                   </div>



//                   {/* Logout */}

//                   <div

//                     className="border-t border-black/10 p-1.5 dark:border-white/10"

//                   >

//                     <a

//                       href="#"

//                       id="user-menu-logout"

//                       className="flex w-full items-center gap-3 rounded-xl px-3 py-1 text-sm font-medium text-red-500 transition-colors hover:bg-red-500/10"

//                     >

//                       <span

//                         className="flex h-8 w-8 items-center justify-center rounded-lg"

//                       >

//                         <svg

//                           xmlns="http://www.w3.org/2000/svg"

//                           fill="none"

//                           viewBox="0 0 24 24"

//                           strokeWidth="1.5"

//                           stroke="currentColor"

//                           className="text-red-400 rotate-180"

//                         >

//                           <path

//                             strokeLinecap="round"

//                             strokeLinejoin="round"

//                             d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"

//                           />

//                         </svg>

//                       </span>



//                       <span>Logout</span>

//                     </a>

//                   </div>

//                 </div>

//               </div>

//               <div

//                 id="user-infos"

//                 className="flex min-w-0 items-center justify-between cursor-default md:cursor-pointer"

//               >

//                 <div

//                   className="flex flex-col min-w-0 items-center justify-center gap-0.5 mr-3.5"

//                 >

//                   <p

//                     className="user-name max-w-full truncate text-[14px] font-semibold"

//                   ></p>

//                   <p

//                     className="user-role max-w-full truncate text-[10px] text-xs"

//                   ></p>

//                 </div>



//                 {/* Profile dropdown button */}



//                 <span

//                   id="user-profile"

//                   type="button"

//                   className="block h-5 w-5 rounded-full text-zinc-600 transition-all duration-250 focus:outline-none dark:text-amber-50 md:hover:scale-105"

//                 >

//                   <svg

//                     xmlns="http://www.w3.org/2000/svg"

//                     fill="none"

//                     viewBox="0 0 24 24"

//                     strokeWidth="1.5"

//                     stroke="currentColor"

//                   >

//                     <path

//                       strokeLinecap="round"

//                       strokeLinejoin="round"

//                       d="m19.5 8.25-7.5 7.5-7.5-7.5"

//                     />

//                   </svg>

//                 </span>

//               </div>

//             </div>

//           </div>



//           <div

//             id="messageNotificationModal"

//             className="notification-modal compact absolute top-17 right-0 z-50 invisible overflow-hidden rounded-2xl border border-slate-200 bg-white opacity-0 shadow-xl transition-all duration-500 ease-in-out dark:border-slate-700 dark:bg-[#151B23]"

//           >

//             {/* Compact */}



//             <div id="notification-compact-view">

//               <div

//                 className="flex items-center justify-between border-b border-slate-200 px-4 py-3 dark:border-slate-700"

//               >

//                 <div className="min-w-0">

//                   <h3 className="text-sm font-bold text-slate-800 dark:text-white">

//                     Messages

//                   </h3>



//                   <p className="mt-0.5 text-xs text-slate-400">Recent messages</p>

//                 </div>



//                 <span

//                   id="notification-unread-count"

//                   className="hidden shrink-0 rounded-full bg-orange-100 px-2 py-1 text-xs font-semibold text-orange-600"

//                 >

//                   0

//                 </span>

//               </div>



//               <div

//                 id="messageNotificationList"

//                 className="max-h-[60vh] overflow-y-auto"

//               >

//                 <div className="px-4 py-8 text-center text-sm text-slate-400">

//                   No new messages

//                 </div>

//               </div>



//               <div className="border-t border-slate-200 p-3 dark:border-slate-700">

//                 <button

//                   id="view-all-notifications"

//                   type="button"

//                   className="block w-full rounded-lg bg-indigo-600 px-4 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-orange-600"

//                 >

//                   View all notifications

//                 </button>

//               </div>

//             </div>



//             {/* Expanded */}



//             <div

//               id="notification-expanded-view"

//               className="hidden relative h-[75dvh] flex-col min-h-0"

//             >

//               <div

//                 className="flex shrink-0 items-center justify-between border-b border-slate-200 bg-white px-4 py-3 dark:border-slate-700 dark:bg-slate-800"

//               >

//                 <div className="flex min-w-0 items-center gap-3">

//                   <button

//                     id="back-to-notifications"

//                     type="button"

//                     className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-slate-800 dark:text-slate-400 dark:hover:bg-white/5 dark:hover:text-white"

//                     aria-label="Back to recent notifications"

//                   >

//                     <svg

//                       xmlns="http://www.w3.org/2000/svg"

//                       fill="none"

//                       viewBox="0 0 24 24"

//                       strokeWidth="1.5"

//                       stroke="currentColor"

//                     >

//                       <path

//                         strokeLinecap="round"

//                         strokeLinejoin="round"

//                         d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"

//                       />

//                     </svg>

//                   </button>



//                   <div className="min-w-0">

//                     <h3

//                       className="text-sm font-bold text-slate-800 dark:text-white"

//                     >

//                       Notifications

//                     </h3>



//                     <p className="mt-0.5 text-xs text-slate-400">

//                       All notifications

//                     </p>

//                   </div>

//                 </div>



//                 <button

//                   id="mark-all-notifications-read"

//                   type="button"

//                   className="shrink-0 text-xs font-medium text-indigo-600 transition hover:text-orange-600 dark:text-indigo-400 dark:hover:text-orange-400"

//                 >

//                   Mark all as read

//                 </button>

//               </div>



//               <div

//                 id="all-notifications-list"

//                 className="min-h-0 flex-1 overflow-y-auto"

//               >

//                 <div className="px-4 pb-2 pt-4">

//                   <p

//                     className="text-[10px] font-bold uppercase tracking-wider text-slate-400"

//                   >

//                     Today

//                   </p>

//                 </div>

//               </div>

//             </div>

//           </div>

//         </header>

//         {/* ================================================= */}

//         {/* NOTIFICATION DETAIL MODAL */}

//         {/* ================================================= */}

//         <div

//           id="notification-detail-modal"

//           className="fixed inset-0 z-[1000] invisible flex items-center justify-center opacity-0 transition-all duration-300"

//         >

//           {/* Overlay */}

//           <div

//             id="notification-detail-overlay"

//             className="absolute inset-0 bg-black/60"

//           ></div>



//           {/* Modal */}

//           <div

//             className="relative z-10 w-[calc(100%-2rem)] max-w-xl rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-700 dark:bg-[#151B23]"

//           >

//             {/* Header */}

//             <div

//               className="flex items-center justify-between border-b border-slate-200 px-5 py-4 dark:border-slate-700"

//             >

//               <h3

//                 id="notification-detail-title"

//                 className="text-base font-bold text-slate-800 dark:text-white"

//               >

//                 Notification

//               </h3>



//               <button

//                 id="close-notification-detail"

//                 type="button"

//                 className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-white/10 dark:hover:text-white"

//               >

//                 <svg

//                   xmlns="http://www.w3.org/2000/svg"

//                   width="1em"

//                   height="1em"

//                   viewBox="0 0 24 24"

//                 >

//                   <path

//                     fill="currentColor"

//                     d="m8.401 16.333l-.734-.727L11.266 12L7.667 8.42l.734-.728L12 11.29l3.574-3.597l.734.727L12.709 12l3.599 3.606l-.734.727L12 12.737z"

//                   />

//                 </svg>

//               </button>

//             </div>



//             {/* Body */}

//             <div className="px-5 py-6">

//               <div className="flex items-start gap-4">

//                 <img

//                   id="notification-detail-image"

//                   src="/images/default-profile.png"

//                   alt=""

//                   className="h-12 w-12 shrink-0 rounded-xl object-cover"

//                 />



//                 <div className="min-w-0 flex-1">

//                   <p

//                     id="notification-detail-sender"

//                     className="text-xs font-semibold text-indigo-600 dark:text-indigo-400"

//                   ></p>



//                   <p

//                     id="notification-detail-message"

//                     className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-300"

//                   ></p>



//                   <p

//                     id="notification-detail-time"

//                     className="mt-4 text-xs text-slate-400"

//                   ></p>

//                 </div>

//               </div>

//             </div>

//           </div>

//         </div>

//         <div className="mb-4">

//           <h2 className="text-3xl font-bold">Dashboard</h2>



//           <p className="mt-1">Welcome back, manage your auto service center</p>

//         </div>

//         {/* Welcome Banner */}



//         <div className="bg-emerald-700 rounded-2xl p-8 text-white mb-8">

//           <h1 className="text-3xl text-white font-bold">Good Morning, Saeed 👋</h1>



//           <p className="mt-2 text-indigo-100">

//             Here is today's service center overview

//           </p>

//         </div>



//         {/* Statistics */}



//         <section

//           className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-5 bg-[#F3F1EC] dark:bg-[#1f0a19]"

//         >

//           <div

//             className="rounded-2xl p-5 border border-[#D9D9D3] dark:border-[#2A3540] shadow-sm"

//           >

//             <p>Customers</p>



//             <h3 className="text-3xl font-bold mt-3">2,540</h3>



//             <span className="text-green-600 text-sm"> ↑ 12% this month </span>

//           </div>



//           <div

//             className="rounded-2xl p-5 border border-[#D9D9D3] dark:border-[#2A3540] shadow-sm"

//           >

//             <p>Vehicles</p>



//             <h3 className="text-3xl font-bold mt-3">3,820</h3>



//             <span className="text-green-600 text-sm"> ↑ 8% </span>

//           </div>



//           <div

//             className="rounded-2xl p-5 border border-[#D9D9D3] dark:border-[#2A3540] shadow-sm"

//           >

//             <p>Appointments</p>



//             <h3 className="text-3xl font-bold mt-3">156</h3>



//             <span className="text-blue-600 text-sm"> Today </span>

//           </div>



//           <div

//             className="rounded-2xl p-5 border border-[#D9D9D3] dark:border-[#2A3540] shadow-sm"

//           >

//             <p>Completed Jobs</p>



//             <h3 className="text-3xl font-bold mt-3">98</h3>



//             <span className="text-green-600 text-sm"> 62% </span>

//           </div>



//           <div

//             className="rounded-2xl p-5 border border-[#D9D9D3] dark:border-[#2A3540] shadow-sm"

//           >

//             <p>Revenue</p>



//             <h3 className="text-3xl font-bold mt-3">$24,850</h3>



//             <span className="text-green-600 text-sm"> Monthly </span>

//           </div>

//         </section>

//         {/* ================= ANALYTICS SECTION ================= */}



//         <section

//           className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-8 bg-[#F3F1EC] dark:bg-[#1f0a19]"

//         >

//           {/* Revenue Overview */}



//           <div

//             className="xl:col-span-2 rounded-2xl border border-[#D9D9D3] dark:border-[#2A3540] shadow-sm p-6"

//           >

//             <div className="flex justify-between items-center mb-6">

//               <div>

//                 <h2 className="text-xl font-bold">Revenue Overview</h2>



//                 <p className="text-sm text-">Monthly income statistics</p>

//               </div>



//               <select className="border rounded-lg px-3 py-2 text-sm outline-none">

//                 <option>2026</option>



//                 <option>2025</option>

//               </select>

//             </div>



//             {/* Chart */}



//             <div className="h-64 flex items-end gap-4 px-4">

//               <div className="flex-1 flex flex-col items-center gap-3">

//                 <div className="w-full h-28 bg-blue-500 rounded-t-xl"></div>



//                 <span className="text-xs text-"> Jan </span>

//               </div>



//               <div className="flex-1 flex flex-col items-center gap-3">

//                 <div className="w-full h-40 bg-indigo-500 rounded-t-xl"></div>



//                 <span className="text-xs text-"> Feb </span>

//               </div>



//               <div className="flex-1 flex flex-col items-center gap-3">

//                 <div className="w-full h-32 bg-cyan-500 rounded-t-xl"></div>



//                 <span className="text-xs text-"> Mar </span>

//               </div>



//               <div className="flex-1 flex flex-col items-center gap-3">

//                 <div className="w-full h-52 bg-orange-500 rounded-t-xl"></div>



//                 <span className="text-xs text-"> Apr </span>

//               </div>



//               <div className="flex-1 flex flex-col items-center gap-3">

//                 <div className="w-full h-44 bg-rose-500 rounded-t-xl"></div>



//                 <span className="text-xs text-"> May </span>

//               </div>



//               <div className="flex-1 flex flex-col items-center gap-3">

//                 <div className="w-full h-60 bg-lime-500 rounded-t-xl"></div>



//                 <span className="text-xs text-"> Jun </span>

//               </div>

//             </div>

//           </div>



//           {/* Appointment Overview */}



//           <div className="rounded-2xl border shadow-sm p-6">

//             <h2 className="text-xl font-bold mb-6">Appointment Overview</h2>



//             <div className="flex justify-center items-center h-48">

//               <div

//                 className="relative w-40 h-40 rounded-full bg-[conic-gradient(#4f46e5_0deg_280deg,#10b981_280deg_320deg,#f59e0b_320deg_360deg)]"

//               >

//                 <div

//                   className="absolute inset-8 rounded-full flex items-center justify-center"

//                 >

//                   <div className="text-center">

//                     <p className="text-3xl font-bold text-[#f4f4fc]">78%</p>



//                     <p className="text-xs text-[#f4f4fc]">Completed</p>

//                   </div>

//                 </div>

//               </div>

//             </div>



//             <div className="space-y-4 mt-5">

//               <div className="flex justify-between">

//                 <span> Completed </span>



//                 <span className="font-semibold"> 98 </span>

//               </div>



//               <div className="flex justify-between">

//                 <span> Pending </span>



//                 <span className="font-semibold"> 35 </span>

//               </div>



//               <div className="flex justify-between">

//                 <span> Cancelled </span>



//                 <span className="font-semibold"> 12 </span>

//               </div>

//             </div>

//           </div>

//         </section>



//         {/* ================= TABLES SECTION ================= */}



//         <section

//           className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-8 bg-[#F3F1EC] dark:bg-[#1f0a19]"

//         >

//           {/* Recent Appointments */}



//           <div

//             className="xl:col-span-2 rounded-2xl border shadow-sm p-6 overflow-x-auto"

//           >

//             <div className="flex justify-between items-center mb-5">

//               <h2 className="text-xl font-bold">Recent Appointments</h2>



//               <button className="text-orange-400 text-sm font-medium">

//                 View All

//               </button>

//             </div>



//             <table className="w-full text-sm">

//               <thead className="bg-slate-50">

//                 <tr>

//                   <th className="p-3 text-left">Customer</th>



//                   <th className="p-3 text-left">Vehicle</th>



//                   <th className="p-3 text-left">Service</th>



//                   <th className="p-3 text-left">Status</th>

//                 </tr>

//               </thead>



//               <tbody>

//                 <tr className="border-b">

//                   <td className="p-3 font-semibold">John Smith</td>



//                   <td className="p-3">BMW X5</td>



//                   <td className="p-3">Engine Repair</td>



//                   <td className="p-3">

//                     <span

//                       className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs"

//                     >

//                       Completed

//                     </span>

//                   </td>

//                 </tr>



//                 <tr className="border-b">

//                   <td className="p-3 font-semibold">Alice Brown</td>



//                   <td className="p-3">Toyota Camry</td>



//                   <td className="p-3">Oil Change</td>



//                   <td className="p-3">

//                     <span

//                       className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs"

//                     >

//                       Pending

//                     </span>

//                   </td>

//                 </tr>



//                 <tr>

//                   <td className="p-3 font-semibold">Robert Lee</td>



//                   <td className="p-3">Honda Civic</td>



//                   <td className="p-3">Brake Service</td>



//                   <td className="p-3">

//                     <span

//                       className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs"

//                     >

//                       Processing

//                     </span>

//                   </td>

//                 </tr>

//               </tbody>

//             </table>

//           </div>



//           {/* Recent Activities */}



//           <div className="rounded-2xl border shadow-sm p-6">

//             <h2 className="text-xl font-bold mb-6">Recent Activities</h2>



//             <div className="space-y-6">

//               <div className="flex gap-4">

//                 <div

//                   className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center"

//                 >

//                   🚗

//                 </div>



//                 <div>

//                   <p className="font-medium">New vehicle registered</p>



//                   <p className="text-sm text-">Toyota Camry added</p>

//                 </div>

//               </div>



//               <div className="flex gap-4">

//                 <div

//                   className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center"

//                 >

//                   ✓

//                 </div>



//                 <div>

//                   <p className="font-medium">Payment received</p>



//                   <p className="text-sm text-">Invoice #2034 paid</p>

//                 </div>

//               </div>



//               <div className="flex gap-4">

//                 <div

//                   className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center"

//                 >

//                   🔧

//                 </div>



//                 <div>

//                   <p className="font-medium">Service completed</p>



//                   <p className="text-sm text-">Brake repair finished</p>

//                 </div>

//               </div>

//             </div>

//           </div>

//         </section>



//         <div

//           id="overlay"

//           className="overlay hidden fixed inset-0 bg-black/20 z-40"

//         ></div>

//         <div id="modal-container"></div>

//         <div id="result-modal-container"></div>

//       </main>

//     </div>



//   </div>





//     </div>

//   );

// }



// export default App;

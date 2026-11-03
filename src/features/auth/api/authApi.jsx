//     //  ################# AFTER REDUX THUNK, THIS ALL IS USELESS ####################


// import axiosInstance from '../../../config/axiosInterceptor'

// // export let userLoginApi =async (credentials)=>{
// //     try {
// //         // call outer action function that is loginUserAction 
// //         let response = await axiosInstance.post('/auth/login', credentials)
// //         localStorage.setItem('accessToken', response.accessToken);
// //         return response.data
// //     } catch (error) {
// //         console.log("Errrrrrrrorrrrrrrrr in the user login api",error);
// //     }

// // }


// export let hydarationApi = async()=>{
//     let Token = localStorage.getItem('accessToken');
//     try {
//         let response = await axiosInstance.get('/auth/me', {
//             headers:{
//                 Authorization:`Bearer ${Token}`
//             }
//         })
//         return response.data
//     } catch (error) {
//         console.log(error)
//     }
// }
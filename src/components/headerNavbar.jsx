

export default function HeaderNavbar({sticky}) {

    return(
        <div className='header-navbar'>
              <div className='target-container'>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 20 20"><path fill="#e64545" d="M17.962 5.309a.5.5 0 0 1-.108.545l-2 2A.5.5 0 0 1 15.5 8h-2.793l-1.353 1.353a1.5 1.5 0 1 1-.707-.707L12 7.293V4.5a.5.5 0 0 1 .146-.354l2-2A.5.5 0 0 1 15 2.5V5h2.5a.5.5 0 0 1 .462.309M16.293 6H14.5a.5.5 0 0 1-.5-.5V3.707l-1 1V7h2.293zm1.314 1.515C17.862 8.297 18 9.133 18 10a8 8 0 1 1-5.515-7.606l-.808.808a7 7 0 1 0 5.121 5.122zM14.9 9q.1.486.1 1a5 5 0 1 1-4-4.9v1.026A4 4 0 1 0 13.874 9z"/></svg>
                <p className='target-text'>Post My RFQ</p>
              </div>
              <div className={sticky? 'hidden':'navbar-items'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="currentColor" d="M229.19 213c-15.81-27.32-40.63-46.49-69.47-54.62a70 70 0 1 0-63.44 0C67.44 166.5 42.62 185.67 26.81 213a6 6 0 1 0 10.38 6c19.21-33.19 53.15-53 90.81-53s71.6 19.81 90.81 53a6 6 0 1 0 10.38-6M70 96a58 58 0 1 1 58 58a58.07 58.07 0 0 1-58-58"/></svg>
                <p className='navbar-items-text'>Sign in/Join</p>
              </div>
              <div className={sticky? 'hidden':'navbar-items'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 36 36"><path fill="currentColor" d="M32 6H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m-1.54 22H5.66l7-7.24l-1.44-1.39L4 26.84V9.52l12.43 12.37a2 2 0 0 0 2.82 0L32 9.21v17.5l-7.36-7.36l-1.41 1.41ZM5.31 8h25.07L17.84 20.47Z" class="clr-i-outline clr-i-outline-path-1"/><path fill="none" d="M0 0h36v36H0z"/></svg>
                <p className='navbar-items-text'>Messages</p>
              </div>
              <div className={sticky? 'hidden':'navbar-items'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="currentColor" d="M104 216a16 16 0 1 1-16-16a16 16 0 0 1 16 16m88-16a16 16 0 1 0 16 16a16 16 0 0 0-16-16m47.71-125.86l-25.64 92.28A24.06 24.06 0 0 1 191 184H92.16A24.06 24.06 0 0 1 69 166.42L33.92 40H16a8 8 0 0 1 0-16h24a8 8 0 0 1 7.71 5.86L57.19 64H232a8 8 0 0 1 7.71 10.14M221.47 80H61.64l22.81 82.14a8 8 0 0 0 7.71 5.86H191a8 8 0 0 0 7.71-5.86Z"/></svg>
                <p className='navbar-items-text'>Inquiry Basket</p>
              </div>
            </div>
    )
}
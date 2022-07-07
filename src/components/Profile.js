import React from 'react';

import './Profile.css'

const Profile = () => {
    return (
        <div>
            <h1 id="ProfileHeader">WELCOME USERNAME</h1> 
            {/* this will be changed to logged in user */}
            <div id="gridcontainer">
            <div id="messagesContainer">
            <div id="messagesToBox">
                <h1>MESSAGES TO</h1>
                <div className='gridBoxes'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem leo, molestie vel porta in, convallis eget dui. Suspendisse volutpat iaculis tristique. Suspendisse potenti. Suspendisse pellentesque tempus magna, nec lacinia neque aliquam eget. Phasellus ipsum justo, laoreet et ullamcorper aliquam, accumsan at risus. In quis dui diam. Vestibulum eget nisi leo. Etiam cursus volutpat egestas. Maecenas sollicitudin mattis dolor nec auctor. Donec consectetur scelerisque neque, sit amet luctus ligula lobortis id. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec et mauris finibus, faucibus erat quis, eleifend augue.

Donec eu arcu lorem. Sed condimentum ipsum ipsum, id cursus quam posuere vel. Integer pellentesque nibh justo, nec varius justo malesuada id. Nam posuere, ex eu vulputate aliquet, est turpis scelerisque ipsum, sagittis rutrum nibh dolor ac mi. Nullam sed nisi in eros rutrum egestas id et nisi. Etiam a pellentesque elit, eget lacinia enim. Suspendisse vestibulum egestas velit sed blandit. In at pharetra est. Etiam pulvinar vel nulla ut efficitur.

Proin viverra quam in dolor varius, ac efficitur purus hendrerit. Curabitur vitae porttitor quam. Nulla facilisi. Mauris ac cursus ex, sit amet commodo leo. Nulla at mauris ante. Cras nisi massa, suscipit id tempor ultricies, tempor eu magna. Vivamus vel ullamcorper eros. Integer at justo quis purus dignissim placerat et non lectus. Cras id condimentum lorem. Donec vehicula hendrerit sem, in interdum nisl malesuada quis. Nam hendrerit et ligula ut feugiat.

Integer pulvinar urna id metus feugiat, et fringilla orci pellentesque. Proin mattis congue justo, nec vehicula enim lobortis ac. In ullamcorper venenatis mi, at luctus erat gravida vel. Nam luctus ultricies quam, sit amet dictum dui hendrerit ut. Fusce eu nisl sed velit iaculis ornare et eu turpis. Vestibulum tellus augue, dignissim quis tristique non, pharetra sit amet justo. Maecenas molestie feugiat tincidunt. Vestibulum vestibulum, dolor et convallis blandit, augue metus euismod urna, a cursus odio odio a tellus. Sed feugiat nisl non blandit commodo. Sed egestas neque egestas lorem dictum placerat. Maecenas pretium lacus eget odio malesuada rutrum. Fusce et est efficitur, tempor dolor eget, commodo mi. Quisque accumsan euismod sapien, a dignissim mi commodo a. Morbi nec leo eget lectus tincidunt ullamcorper.

Cras sed quam libero. Nulla sed viverra lacus. Curabitur lobortis, metus sit amet posuere facilisis, dui nulla vehicula justo, vel hendrerit sapien dui sed justo. Vivamus enim libero, porttitor vel dapibus et, tempus at justo. Etiam consequat sapien enim, ultricies fringilla felis condimentum ac. In bibendum maximus velit vitae suscipit. Donec sed commodo dolor, et semper nisl. Donec suscipit libero vulputate, molestie lectus sit amet, mattis augue. Sed sit amet risus nunc. Sed quis tempus lectus, iaculis pulvinar mauris. Pellentesque sodales sollicitudin libero, a malesuada ligula. Nulla nec justo efficitur, consequat orci eu, porta nisi. Vestibulum semper bibendum mattis. Pellentesque euismod, nisi vitae elementum congue, sapien quam luctus nibh, a vestibulum nibh ex eu est. Vestibulum non orci et lectus laoreet vehicula. Morbi scelerisque urna quis purus auctor dignissim.</div>
            </div>
            <div id="messagesFromBox">
                <h1>MESSAGES FROM</h1>
                <div className='gridBoxes'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem leo, molestie vel porta in, convallis eget dui. Suspendisse volutpat iaculis tristique. Suspendisse potenti. Suspendisse pellentesque tempus magna, nec lacinia neque aliquam eget. Phasellus ipsum justo, laoreet et ullamcorper aliquam, accumsan at risus. In quis dui diam. Vestibulum eget nisi leo. Etiam cursus volutpat egestas. Maecenas sollicitudin mattis dolor nec auctor. Donec consectetur scelerisque neque, sit amet luctus ligula lobortis id. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec et mauris finibus, faucibus erat quis, eleifend augue.

Donec eu arcu lorem. Sed condimentum ipsum ipsum, id cursus quam posuere vel. Integer pellentesque nibh justo, nec varius justo malesuada id. Nam posuere, ex eu vulputate aliquet, est turpis scelerisque ipsum, sagittis rutrum nibh dolor ac mi. Nullam sed nisi in eros rutrum egestas id et nisi. Etiam a pellentesque elit, eget lacinia enim. Suspendisse vestibulum egestas velit sed blandit. In at pharetra est. Etiam pulvinar vel nulla ut efficitur.

Proin viverra quam in dolor varius, ac efficitur purus hendrerit. Curabitur vitae porttitor quam. Nulla facilisi. Mauris ac cursus ex, sit amet commodo leo. Nulla at mauris ante. Cras nisi massa, suscipit id tempor ultricies, tempor eu magna. Vivamus vel ullamcorper eros. Integer at justo quis purus dignissim placerat et non lectus. Cras id condimentum lorem. Donec vehicula hendrerit sem, in interdum nisl malesuada quis. Nam hendrerit et ligula ut feugiat.

Integer pulvinar urna id metus feugiat, et fringilla orci pellentesque. Proin mattis congue justo, nec vehicula enim lobortis ac. In ullamcorper venenatis mi, at luctus erat gravida vel. Nam luctus ultricies quam, sit amet dictum dui hendrerit ut. Fusce eu nisl sed velit iaculis ornare et eu turpis. Vestibulum tellus augue, dignissim quis tristique non, pharetra sit amet justo. Maecenas molestie feugiat tincidunt. Vestibulum vestibulum, dolor et convallis blandit, augue metus euismod urna, a cursus odio odio a tellus. Sed feugiat nisl non blandit commodo. Sed egestas neque egestas lorem dictum placerat. Maecenas pretium lacus eget odio malesuada rutrum. Fusce et est efficitur, tempor dolor eget, commodo mi. Quisque accumsan euismod sapien, a dignissim mi commodo a. Morbi nec leo eget lectus tincidunt ullamcorper.

Cras sed quam libero. Nulla sed viverra lacus. Curabitur lobortis, metus sit amet posuere facilisis, dui nulla vehicula justo, vel hendrerit sapien dui sed justo. Vivamus enim libero, porttitor vel dapibus et, tempus at justo. Etiam consequat sapien enim, ultricies fringilla felis condimentum ac. In bibendum maximus velit vitae suscipit. Donec sed commodo dolor, et semper nisl. Donec suscipit libero vulputate, molestie lectus sit amet, mattis augue. Sed sit amet risus nunc. Sed quis tempus lectus, iaculis pulvinar mauris. Pellentesque sodales sollicitudin libero, a malesuada ligula. Nulla nec justo efficitur, consequat orci eu, porta nisi. Vestibulum semper bibendum mattis. Pellentesque euismod, nisi vitae elementum congue, sapien quam luctus nibh, a vestibulum nibh ex eu est. Vestibulum non orci et lectus laoreet vehicula. Morbi scelerisque urna quis purus auctor dignissim.</div>
            </div>
            </div>
            <div id="userPostsBox">
                <h1>USER POSTS</h1>
                {/* this will be changed to logged in user */}
                <div className='gridBoxes'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem leo, molestie vel porta in, convallis eget dui. Suspendisse volutpat iaculis tristique. Suspendisse potenti. Suspendisse pellentesque tempus magna, nec lacinia neque aliquam eget. Phasellus ipsum justo, laoreet et ullamcorper aliquam, accumsan at risus. In quis dui diam. Vestibulum eget nisi leo. Etiam cursus volutpat egestas. Maecenas sollicitudin mattis dolor nec auctor. Donec consectetur scelerisque neque, sit amet luctus ligula lobortis id. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec et mauris finibus, faucibus erat quis, eleifend augue.

Donec eu arcu lorem. Sed condimentum ipsum ipsum, id cursus quam posuere vel. Integer pellentesque nibh justo, nec varius justo malesuada id. Nam posuere, ex eu vulputate aliquet, est turpis scelerisque ipsum, sagittis rutrum nibh dolor ac mi. Nullam sed nisi in eros rutrum egestas id et nisi. Etiam a pellentesque elit, eget lacinia enim. Suspendisse vestibulum egestas velit sed blandit. In at pharetra est. Etiam pulvinar vel nulla ut efficitur.

Proin viverra quam in dolor varius, ac efficitur purus hendrerit. Curabitur vitae porttitor quam. Nulla facilisi. Mauris ac cursus ex, sit amet commodo leo. Nulla at mauris ante. Cras nisi massa, suscipit id tempor ultricies, tempor eu magna. Vivamus vel ullamcorper eros. Integer at justo quis purus dignissim placerat et non lectus. Cras id condimentum lorem. Donec vehicula hendrerit sem, in interdum nisl malesuada quis. Nam hendrerit et ligula ut feugiat.

Integer pulvinar urna id metus feugiat, et fringilla orci pellentesque. Proin mattis congue justo, nec vehicula enim lobortis ac. In ullamcorper venenatis mi, at luctus erat gravida vel. Nam luctus ultricies quam, sit amet dictum dui hendrerit ut. Fusce eu nisl sed velit iaculis ornare et eu turpis. Vestibulum tellus augue, dignissim quis tristique non, pharetra sit amet justo. Maecenas molestie feugiat tincidunt. Vestibulum vestibulum, dolor et convallis blandit, augue metus euismod urna, a cursus odio odio a tellus. Sed feugiat nisl non blandit commodo. Sed egestas neque egestas lorem dictum placerat. Maecenas pretium lacus eget odio malesuada rutrum. Fusce et est efficitur, tempor dolor eget, commodo mi. Quisque accumsan euismod sapien, a dignissim mi commodo a. Morbi nec leo eget lectus tincidunt ullamcorper.

Cras sed quam libero. Nulla sed viverra lacus. Curabitur lobortis, metus sit amet posuere facilisis, dui nulla vehicula justo, vel hendrerit sapien dui sed justo. Vivamus enim libero, porttitor vel dapibus et, tempus at justo. Etiam consequat sapien enim, ultricies fringilla felis condimentum ac. In bibendum maximus velit vitae suscipit. Donec sed commodo dolor, et semper nisl. Donec suscipit libero vulputate, molestie lectus sit amet, mattis augue. Sed sit amet risus nunc. Sed quis tempus lectus, iaculis pulvinar mauris. Pellentesque sodales sollicitudin libero, a malesuada ligula. Nulla nec justo efficitur, consequat orci eu, porta nisi. Vestibulum semper bibendum mattis. Pellentesque euismod, nisi vitae elementum congue, sapien quam luctus nibh, a vestibulum nibh ex eu est. Vestibulum non orci et lectus laoreet vehicula. Morbi scelerisque urna quis purus auctor dignissim.</div>
            </div>
            </div>
        </div>
    )
} 

export default Profile
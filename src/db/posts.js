import React, {Fragment} from 'react';

let posts = [
    {
        title: 'javascript how to use binary search algorithms',
        image: '../public/images/solution.webp',
        full: false,
        text: <Fragment><p>Sed at venenatis orci. Curabitur vel laoreet dolor, eget pharetra eros. Vivamus vitae augue urna. Mauris porttitor turpis sed fringilla molestie. Donec dolor magna, porta et sollicitudin id, laoreet eu dolor. Praesent ac semper lectus. Curabitur luctus nunc vel tortor lacinia ultricies. Maecenas ac varius enim. Nullam placerat lacus id finibus aliquet. Sed sit amet diam mauris. Duis egestas eget lacus eget lobortis.</p>

        <p>Phasellus non tellus vel neque scelerisque bibendum. Maecenas eget sapien sed ante euismod malesuada efficitur in nunc. Sed eleifend purus nec arcu aliquam vehicula. Ut et vulputate neque, in porta nulla. Etiam at viverra orci, nec egestas mauris. Phasellus vulputate egestas libero, vitae sodales ante vulputate a. Aliquam non mi nisi. Aenean suscipit pharetra facilisis. Aliquam mollis nibh vel libero ultrices commodo. Suspendisse lectus sem, pulvinar sit amet consequat eu, rhoncus eu ante. Duis nec nibh suscipit, molestie augue a, lobortis turpis. Ut diam turpis, commodo in lobortis a, egestas nec tellus. Sed tristique sagittis lectus quis consectetur. Donec condimentum eros eu gravida maximus. Suspendisse vel sem erat.</p>
        
        <p>Nam fringilla sit amet velit a consequat. Maecenas lorem lectus, placerat vitae lectus eget, tempus finibus mauris. Morbi ac enim eget odio molestie tincidunt. Donec vel porta odio. Maecenas at est et velit aliquet ultricies at at tortor. Nullam placerat auctor dui, eget porttitor tellus interdum vitae. Nullam faucibus dolor sed mattis hendrerit. Fusce pellentesque pharetra mi, sit amet vulputate metus sagittis non. Fusce fringilla id risus vel lobortis. Nullam ultrices arcu vel orci accumsan dictum.</p>
        
        <p>Curabitur commodo erat at malesuada faucibus. Pellentesque egestas sodales erat sit amet iaculis. Ut nec aliquet nulla. In euismod semper nisl, vitae lobortis elit egestas nec. Phasellus eget nisi molestie, tempor justo quis, luctus elit. Nullam molestie sed leo sit amet accumsan. Cras dictum est neque, vel aliquet nisl suscipit vel. Maecenas eu lorem mi. Praesent purus purus, cursus vel volutpat scelerisque, sollicitudin quis massa. Suspendisse potenti. Donec semper dictum malesuada. Ut interdum dignissim mollis. Ut nulla est, pharetra vel facilisis facilisis, cursus eget est. In lacinia et sapien nec volutpat. Vivamus ut justo non ante dictum bibendum.</p>
        </Fragment>
    },
    {
        title: 'title test title ??',
        image: '../public/images/door_puzzle.webp',
        full: false,
        text: <Fragment><p>Nam fringilla sit amet velit a consequat. Maecenas lorem lectus, placerat vitae lectus eget, tempus finibus mauris. Morbi ac enim eget odio molestie tincidunt. Donec vel porta odio. Maecenas at est et velit aliquet ultricies at at tortor. Nullam placerat auctor dui, eget porttitor tellus interdum vitae. Nullam faucibus dolor sed mattis hendrerit. Fusce pellentesque pharetra mi, sit amet vulputate metus sagittis non. Fusce fringilla id risus vel lobortis. Nullam ultrices arcu vel orci accumsan dictum.</p>
        
        <p>Curabitur commodo erat at malesuada faucibus. Pellentesque egestas sodales erat sit amet iaculis. Ut nec aliquet nulla. In euismod semper nisl, vitae lobortis elit egestas nec. Phasellus eget nisi molestie, tempor justo quis, luctus elit. Nullam molestie sed leo sit amet accumsan. Cras dictum est neque, vel aliquet nisl suscipit vel. Maecenas eu lorem mi. Praesent purus purus, cursus vel volutpat scelerisque, sollicitudin quis massa. Suspendisse potenti. Donec semper dictum malesuada. Ut interdum dignissim mollis. Ut nulla est, pharetra vel facilisis facilisis, cursus eget est. In lacinia et sapien nec volutpat. Vivamus ut justo non ante dictum bibendum.</p>
        
        <p>Sed at venenatis orci. Curabitur vel laoreet dolor, eget pharetra eros. Vivamus vitae augue urna. Mauris porttitor turpis sed fringilla molestie. Donec dolor magna, porta et sollicitudin id, laoreet eu dolor. Praesent ac semper lectus. Curabitur luctus nunc vel tortor lacinia ultricies. Maecenas ac varius enim. Nullam placerat lacus id finibus aliquet. Sed sit amet diam mauris. Duis egestas eget lacus eget lobortis.</p>

        <p>Phasellus non tellus vel neque scelerisque bibendum. Maecenas eget sapien sed ante euismod malesuada efficitur in nunc. Sed eleifend purus nec arcu aliquam vehicula. Ut et vulputate neque, in porta nulla. Etiam at viverra orci, nec egestas mauris. Phasellus vulputate egestas libero, vitae sodales ante vulputate a. Aliquam non mi nisi. Aenean suscipit pharetra facilisis. Aliquam mollis nibh vel libero ultrices commodo. Suspendisse lectus sem, pulvinar sit amet consequat eu, rhoncus eu ante. Duis nec nibh suscipit, molestie augue a, lobortis turpis. Ut diam turpis, commodo in lobortis a, egestas nec tellus. Sed tristique sagittis lectus quis consectetur. Donec condimentum eros eu gravida maximus. Suspendisse vel sem erat.</p>
        </Fragment>
    },
    {
        title: 'title test title',
        image: '../public/images/puzzle_cube.webp',
        full: false,
        text: <Fragment><p>Phasellus malesuada metus ultrices blandit ultricies. Aenean lacinia cursus sapien, in bibendum risus feugiat eget. Suspendisse vestibulum odio sit amet gravida mollis. Quisque nulla tortor, rutrum vitae neque non, tempus fermentum eros. Nunc maximus, urna vitae ultricies lacinia, sapien velit fermentum dui, ut faucibus eros libero vitae nisl. Nam bibendum mattis aliquam. Cras non nunc quis nibh maximus interdum ut in sapien. Vivamus eu dui at orci commodo imperdiet at ut leo. Quisque non ante vel tellus faucibus varius vitae ac purus. Aenean viverra sollicitudin ultrices.</p>

        <p>Duis sapien libero, aliquam vel condimentum in, suscipit et nunc. Nullam sit amet lacus nec diam auctor molestie quis eu arcu. Mauris justo turpis, cursus eu libero sed, varius euismod sapien. Praesent eleifend ultrices arcu eget consequat. Maecenas id ante fringilla quam semper ullamcorper. Phasellus sapien massa, facilisis id sem a, pellentesque egestas augue. Mauris facilisis ornare hendrerit. Maecenas malesuada pulvinar leo eu efficitur. Mauris est purus, ornare a tincidunt eu, placerat malesuada leo. Pellentesque suscipit dictum mollis. Duis tristique imperdiet erat sit amet sagittis. Vestibulum lacus nisl, egestas in eleifend facilisis, efficitur at mi. Ut blandit, ligula vel mattis pellentesque, nibh augue vestibulum nisi, vel ultrices lacus nunc et nulla. Cras pulvinar lobortis erat, vitae vulputate nisl condimentum vitae. In id consequat mauris, at tempus sem. Vivamus tellus turpis, luctus eu lorem et, commodo rhoncus quam.</p>
        
        <p>Ut iaculis sapien orci, et hendrerit arcu molestie non. Cras et turpis turpis. Donec varius vehicula tristique. Duis a ligula in sapien venenatis pulvinar quis ut libero. Praesent facilisis viverra metus vitae porttitor. Mauris sem dolor, pharetra eget tempus eget, pellentesque non mauris. Curabitur consequat vitae lectus in feugiat. Sed hendrerit interdum sapien nec pulvinar. Pellentesque mollis, nisl a aliquet dictum, tellus arcu bibendum odio, et feugiat magna tortor in neque. Suspendisse id pharetra metus. Curabitur viverra ligula ut neque pulvinar facilisis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut eleifend pharetra nisi, sit amet volutpat urna. Integer pretium blandit ultrices. Nunc tincidunt odio quis porta pellentesque.</p>
        </Fragment>
    },
    {
        title: 'title test title',
        image: '../public/images/puzzle_grab.jpg',
        full: false,
        text: <Fragment><p>Curabitur commodo erat at malesuada faucibus. Pellentesque egestas sodales erat sit amet iaculis. Ut nec aliquet nulla. In euismod semper nisl, vitae lobortis elit egestas nec. Phasellus eget nisi molestie, tempor justo quis, luctus elit. Nullam molestie sed leo sit amet accumsan. Cras dictum est neque, vel aliquet nisl suscipit vel. Maecenas eu lorem mi. Praesent purus purus, cursus vel volutpat scelerisque, sollicitudin quis massa. Suspendisse potenti. Donec semper dictum malesuada. Ut interdum dignissim mollis. Ut nulla est, pharetra vel facilisis facilisis, cursus eget est. In lacinia et sapien nec volutpat. Vivamus ut justo non ante dictum bibendum.</p>
        
        <p>Nam fringilla sit amet velit a consequat. Maecenas lorem lectus, placerat vitae lectus eget, tempus finibus mauris. Morbi ac enim eget odio molestie tincidunt. Donec vel porta odio. Maecenas at est et velit aliquet ultricies at at tortor. Nullam placerat auctor dui, eget porttitor tellus interdum vitae. Nullam faucibus dolor sed mattis hendrerit. Fusce pellentesque pharetra mi, sit amet vulputate metus sagittis non. Fusce fringilla id risus vel lobortis. Nullam ultrices arcu vel orci accumsan dictum.</p>
        
        <p>Sed at venenatis orci. Curabitur vel laoreet dolor, eget pharetra eros. Vivamus vitae augue urna. Mauris porttitor turpis sed fringilla molestie. Donec dolor magna, porta et sollicitudin id, laoreet eu dolor. Praesent ac semper lectus. Curabitur luctus nunc vel tortor lacinia ultricies. Maecenas ac varius enim. Nullam placerat lacus id finibus aliquet. Sed sit amet diam mauris. Duis egestas eget lacus eget lobortis.</p>

        <p>Phasellus non tellus vel neque scelerisque bibendum. Maecenas eget sapien sed ante euismod malesuada efficitur in nunc. Sed eleifend purus nec arcu aliquam vehicula. Ut et vulputate neque, in porta nulla. Etiam at viverra orci, nec egestas mauris. Phasellus vulputate egestas libero, vitae sodales ante vulputate a. Aliquam non mi nisi. Aenean suscipit pharetra facilisis. Aliquam mollis nibh vel libero ultrices commodo. Suspendisse lectus sem, pulvinar sit amet consequat eu, rhoncus eu ante. Duis nec nibh suscipit, molestie augue a, lobortis turpis. Ut diam turpis, commodo in lobortis a, egestas nec tellus. Sed tristique sagittis lectus quis consectetur. Donec condimentum eros eu gravida maximus. Suspendisse vel sem erat.</p>
        </Fragment>
    },
];

export {posts};
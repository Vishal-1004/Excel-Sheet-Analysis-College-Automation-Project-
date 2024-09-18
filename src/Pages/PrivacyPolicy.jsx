import React from 'react';
import { Link } from 'react-router-dom';

function PrivacyPolicy(){
  return (
    <div className="max-w-3xl mx-auto p-6 text-gray-500">
      <div className="relative mb-4 text-center">
        <div className="text-green-700 font-semibold">
          Current as of 17 Sep 2024
        </div>

        <Link to="/">
          <button
            className="absolute -right-5 text-gray-600 hover:text-gray-800 transition-transform transform hover:translate-x-2"
          >
            &larr; Go Back
          </button>
        </Link>
      </div>

      <div className='flex flex-col justify-center items-center mb-4'>
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-700 tracking-wide">
          Privacy Policy
        </h1>
        <p className="mb-4 text-center">
          Your privacy is important to us. We respect your privacy regarding any information we may collect from you across our website.
        </p>
      </div>
      <p className="mb-4">
        Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.
      </p>
      <p className="mb-4">
        Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-600">
        What information do we collect?
      </h2>
      <p className="mb-4">
        Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.
      </p>
      <p className="mb-4">
        Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. Sed condimentum enim dignissim adipiscing faucibus consequat, urna. Viverra purus et erat auctor aliquam. Risus, volutpat vulputate posuere purus sit congue convallis aliquet. Arcu id augue ut feugiat donec porttitor neque. Mauris, neque ultricies eu vestibulum, bibendum quam lorem id. Dolor lacus, eget nunc lectus in tellus, pharetra, porttitor.
      </p>
      <p className="mb-4">
        Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orci.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-600">
        Do we use cookies and other letter spacing technologies?
      </h2>
      <p className="mb-4">
        Pharetra morbi libero id aliquam elit massa integer tellus. Quis felis aliquam ullamcorper porttitor. Pulvinar ullamcorper sit dictumst ut eget a, elementum eu. Maecenas est morbi mattis id in ac pellentesque ac.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-600">
        How long do we keep your information?
      </h2>
      <p className="mb-4">
        Pharetra morbi libero id aliquam elit massa integer tellus. Quis felis aliquam ullamcorper porttitor. Pulvinar ullamcorper sit dictumst ut eget a, elementum eu. Maecenas est morbi mattis id in ac pellentesque ac.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-600">
        How do we keep your information safe?
      </h2>
      <p className="mb-4">
        Pharetra morbi libero id aliquam elit massa integer tellus. Quis felis aliquam ullamcorper porttitor. Pulvinar ullamcorper sit dictumst ut eget a, elementum eu. Maecenas est morbi mattis id in ac pellentesque ac.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-600">
        What are your privacy rights?
      </h2>
      <p className="mb-4">
        Pharetra morbi libero id aliquam elit massa integer tellus. Quis felis aliquam ullamcorper porttitor. Pulvinar ullamcorper sit dictumst ut eget a, elementum eu. Maecenas est morbi mattis id in ac pellentesque ac.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-600">
        How can you contact us about this policy?
      </h2>
      <p className="mb-4">
        Sagittis et eu at elementum, quis in. Proin praesent volutpat egestas sociis sit lorem nunc nunc sit. Eget diam curabitur mi ac. Auctor rutrum lacus malesuada massa ornare et. Vulputate consectetur ac ultrices at diam dui eget fringilla tincidunt. Arcu sit dignissim massa erat cursus vulputate gravida id. Sed quis auctor vulputate hac elementum gravida cursus dis.
      </p>
      <ol className="list-decimal list-inside mb-4">
        <li>Lectus id duis vitae porttitor enim gravida morbi.</li>
        <li>Eu turpis posuere semper feugiat volutpat elit, ultrices suspendisse. Auctor vel in vitae placerat.</li>
        <li>Suspendisse maecenas as donec scelerisque diam sed est duis purus.</li>
      </ol>
    </div>
  );
};

export default PrivacyPolicy;

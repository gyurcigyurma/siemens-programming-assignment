import React from 'react';

const HelpPage = () => {
  return (
    <div className="m-3 lg:w-2/4 sm:w-4/5">
      <h3 className="text-lg my-3">Siemens comment application help</h3>
      <section className="mx-5 my-4">
        Here you can find a simple application that displays comments and some
        statistics about them. The application has tree tabs: Comments, Chart,
        Help.
      </section>
      <ul className="mx-5">
        <li className="mx-3 font-bold">
          Comments Tab:
          <p className="mx-6 font-normal mb-4">
            Here you find a table with the comments. If you click the column
            header then you can apply sorting. Above the table, you can find a
            quckfilter to filter the comments. The filter is not case sensitive.
            At the bottom of the table, you can find the pagination.
          </p>
        </li>
        <li className="mx-3 font-bold">
          Chart Tab:
          <p className="mx-6 font-normal mb-4">
            This page displays the words per comment - X axis displays the
            number of the comment - X axis display the number of words - hover
            over the dots displays the exact value.
          </p>
        </li>
        <li className="mx-3 font-bold">
          Help Tab:
          <p className="mx-6 font-normal mb-16">
            This page displays the help information.
          </p>
        </li>
      </ul>
      <section className="mx-5">
        <hr></hr>
        <h4 className="mt-3 italic text-sm">About</h4>
        <p className="text-xs">Siemens Comment Application v1.0.0</p>
        <p className="text-xs">
          In case of any issue feel free to contribute to{' '}
          <a
            className="text-xs text-blue-600 mr-1"
            target="blank"
            href="https://github.com/gyurcigyurma/siemens-programming-assignment"
          >
            this project
          </a>
          or create a new Issue. <br />
        </p>
      </section>
    </div>
  );
};

export default HelpPage;

# The Survey App

The project is designed to include a template for survey and analyze the results of multiple such surveys taken by different users. The project includes an authentication page. The authentication at this point, can be provided by Google Authentication, that is, anyone having a valid gmail will be able to log in. The &quot;Form &quot; page is a survey template which can be filled by authenticated users. The data is stored in the FireBase database and can then be rendered and analyzed on the &quot;Results&quot; page.

The Application is React based and uses Firebase as a DataBase and authentication provider.

**Getting Started**

Clone the repository. Run &quot;npm i&quot; and the &quot;npm start&quot;.

**Prerequisites**

1. Node ** npm install npm -g**

For more information, see [https://docs.npmjs.com/downloading-and-installing-node-js-and-npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

**Installing  and Usage**

1. Clone the repository : [https://github.com/pranjalikumar/e\_stream.git](https://github.com/pranjalikumar/e_stream.git)
2.Go the folder where repository is cloned
  1. Npm i
  2. Npm start
3. The application will be rendered in the local host. You will be able to see a web page welcoming you the Survey App.
4. On Authenticating, you will be redirected to the Form page where an authenticated yser can fill out a survey.
5. On clicking submit form, the data will be stored in FireBase.
6. You will be able to see the results of the survey and do some analyzation on clicking the &#39;Show Survey Button&#39;.



**Running the tests**

1. A non authenticated user will not be able to access the data and results.-- A test can be generated to see this.
2. Testing suite integrated with Firebase to check integrity constraints of the fields and forms.
3. Form fields have strict validation rules to allow correct format of data to be stored in the database. -- Behaviour of form in the absence of improper data can be checked.

**Security and Automation**

1. Using Firebase to  provide fast and Secured Web Hosting.
2. Firebase offers cloud based database and deployment is automated.

**Built With**

**React**  **-** for Front end UI

**Firebase** - for Database and Server side authentication and management.

**Authors**

Pranjali Manoj Kumar -- 12754-- Specialist Software Engineer

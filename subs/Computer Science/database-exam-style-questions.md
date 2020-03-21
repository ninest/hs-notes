---
title: Database questions and answers
---

## Short questions



1. Outline the differences between data and information [2]
    *   Data is unorganized and raw facts
    *   Whereas information is organized and processed data that has meaning
2. Outline reasons to use a database for the application [4]
    *   Database engine provides **standardized support for operations such as queries**
    *   Built-in capabilities for **ensuring that transactions succeed**
    *   Easy to store, retrieve, and analyze data
    *   No redundant data
    *   Greatly **reduces development time** by providing a common platform that developers can reuse in multiple projects
3. Outline the role of the administrator [2]
    *   Ensure **performance** of DB
    *   Make changes as required to **functions** of DB
    *   Make sure **data integrity is maintained**
    *   Make sure database is **backed up**
    *   Make sure data **security** is maintained
    *   **Authorize** access to the DB
    *   **Coordinating and monitoring** use of DB
4. Outline functions a database administrator must perform regularly [2]
    *   Ensure **backups run regularly **to reduce risk of losing data
    *   Ensure **consistency checks** are run on DB to ensure no data is inconsistent
    *   Ensure **access rights are set correctly** to limit risk across different users
    *   Check need to **install and upgrade DB software** to be sure that data does not become vulnerable to external attacks because of obsolescence
    *   Training new employees
5. Explain with examples, how data validation and verification will be used in processing an output [4]
    *   Validation is making sure that the value entered is of the correct type (logical and reasoning)
    *   For example, the user entered currency value to enter, and not anything else like a date
    *   Verification is getting confirmation that the value entered is the one intended (accuracy)
6. Discuss the importance of **isolation** (ACID property) [3]
    *   Isolation refers to the property of having transactions that are performed at the same time, produce the same results as if they were performed sequentially
    *   For example, a deposit of 10 and withdrawal of 50 should result in account balance decreased by 40 regardless of the order or simultaneity of the two transactions
7. Outline the nature of a data dictionary [2]
    *   Describes the data in a database (it's a separate database/set of tables, provides metadata)
    *   And its meaning, format, relationship to other data
    *   It stores metadata and information about the meaning of data (default values, space allocation)
8. Outline the difference between an information system and database [3]
    *   A **database is a structured store of logically related data**: it is where related data of a particular activity is stored
    *   _Information system_? It **aids in organizing and analyzing data**
    *   The information system includes the database
    *   Together with other components
9. Explain the importance of **durability** [2]
    *   Transaction changed must be available in **event of database failure**
    *   Ensures **transactions are saved successfully** and that the **data does not get erased or lost**
10. Identify two features that will be handled at the physical level [2]
   *   Structure of records on disk (files/pages/blocks)
   *   Indexes and order of records
11. Discuss an ethical issue that could arise if external agencies could obtain and analyse the phone company’s data [3]
    *   Personal information may be used by a third party without the person knowing, therefore violating their privacy
    *   However, this violation may be justified of security reason, for example, monitoring of threats or hate speech
    *   Third parties can 
        *   Build a profile of the user through data aggregation
        *   Use data for fraudulent actions over time such as monitoring bank transactions
        *   Use data for marketing purposes (spam messages)
        *   Identify location of individual/surveillance


## Longer questions



1. Define the terms [1 or 2]
    1. Database
        *   A structured store of logically related data
    2. Relational database
        *   Collection of database tables linked ve the fields/attributes/keys
        *   DB structures in a way so that data can be accessed/retrieved using relations
    3. Entities
        *   Some unit of data that can be classified and has stated relationships to other data units
        *   A real-world object with attributes that is represented as data in a database
    4. RDBMS
        *   A database management system for the databases that are represented/related with **logical relations**
    5. Schema
        *   The **logical structure/blueprint of the data** in the entire database
    6. Primary key
        *   Unique field or group of fields within a table which identity a record
    7. Foreign key
        *   The primary key of another relational schema/table
    8. Data redundancy
        *   The repetition of the same data field/attribute within the database
        *   May happen either across a number of tables in the database or within the same table
    9. Database transaction [2]
        *   The minimal step of **operation/update** to be performed on a database
        *   That guarantees **consistency/integrity** of the database
        *   And **recovery** upon failure
        *   Unit of work, either executed in full or not executed at all
    10. Data warehouse 
       *   A consolidated repository/store of **integrated data from different sources**, different nature (non-volatile)
       *   Collected over **long time periods**
       *   Often augmented with some analytical techniques (data aggregation)
    11. Data mining
        *   A collection of methods and techniques to **explore and analyze** a large quantity of data
        *   It is a process of knowledge discovery
2. This question is about views
    12. Outline how a query can provide a view of a database [3]
        *   Data columns are filtered
        *   By conditions or field/parameter selection
        *   To display a subset of the data
    13. Discuss whether a view is physically stored in the database [3]
        *   The view is **not** part of the physical schema
        *   Hence there is no table corresponding to the view that is physically stored
        *   The view is defined on a query that operated on physically stored data
        *   And provides a mechanism for data aggregation (macro)
3. This is a transaction question
    14. Describe the difference between an **operation** and a **transaction**
        *   An operation is one of the minimal function that a database can perform
        *   A transaction may consist of multiple operations
        *   The withdrawal might consist of a query to determine the account balance followed by a second query to reduce the account balance
    15. State the effect of rolling back a transaction
        *   Returns the database to the state before the transaction was started
4. This is another question is about data transactions
    16. Describe the use of transaction to maintain data consistency [3]
        *   Modifications on data are **made persistent** in the DB **only if transaction terminates**
        *   Roll-back operation performed if a failure occurs prior to termination
        *   This keeps the DB in the original **consistent** status
    17. Explain what is meant by **isolation** in the transaction [2]
        *   It defines **how and when** the changes of a process are visible to **concurrent** operations
        *   for example, using **locks** on data to prevent** concurrent writing** that would lead to inconsistent (such as two people booking same room)
5. This question is about DBMS and transactions in schools
    18. Outline reasons to use a database [2]
        *   DBMS allows for organization of data
        *   Enables specific operations such as querying of data
        *   Permits printing of reports on searched information in specific formats
        *   Supports modular extensions of system by adding new fields without need of redesigning the system
        *   Automatic support of data validation and verification
    19. Describe the interaction between a parent and DBMS in processing a payment [5]
        *   DBMS used to retrieve parents details to enable mailing system to send out invoice (notification system)
        *   Parents log in to DBMS with credentials for **authentication**
        *   Restricted access granted: DBMS most only allow access to part of DB storing child’s activities for payments
        *   Payment: parent provides detail enabling submitting payment
        *   Steamy update: DBMS used to update accounting record and produce receipt to parents
        *   Email confirmation: open session on DB passed to mailing system for notification to parents
        *   Log-out: parents closes session of DBMS with effect of closing access to dedicated portion of DB
    20. Explain the role of how the DB is accessed when many parents pay online at once [3]
        *   multi user/concurrent access in querying DB
        *   Records are partitioned to ensure privacy in data access
        *   isolation/separation of data for transaction processing
        *   Therefore, multiple transactions may occur safely simultaneously
        *   This simplifies management of system updates/recovery of transactions
6. This is a DBMS question
    21. Identify capabilities that must be supported by DBMS tools [3]
        *   **Creation** of a database
        *   **Manipulation** of the database
        *   **Interrogation** of the database
    22. Discuss security features for a DBMS [4]
        *   Data **validation**: ensuring that only data of the correct type is stored in the database
        *   **Access rights**: ensuring that users can only access data to which they are authorized (A cannot access B’s data)
        *   **Data locking**: preventing data values from eing access by a transaction while another transaction involving the same data is in progress
7. This question is about ERD and databases
    23. Explain the role of entity-relationship diagrams when modelling data [4]
        *   Role is to provide a compact view of entities/attributes and relations among them
        *   Facilitates the planning/extension of a database as it provides a unique and common abstract reprelatonsion of features independently from the actual implementation/nature of database
        *   Informs construction of systematic development that can be better undertaken by developers
        *   Informs over time how to model data (example: new formats needed to extend new one)
    24. Outline which property of sata ensures that in a relation DB deletion of records has no unwanted effects [3]
        *   Data show satisfy the property of **referential integrity**
        *   That required that all the values of the foreign key in one table completely relation to all values of the primary key of another table
        *   In the table above, Student_ID is a primary key in TABLE_1 and a foreign key in TABLE_2 and deleting a value in the primary key has an effect on the foreign key by cascading (deleting) in all referencing foreign keys
8. This question is about normalization
    25. Describe the characteristics of a normalized database [2]
        *   A normalized database is one which **minimizes/reduces/eliminates redundancies**
        *   And **dependencies**
        *   So that the **manipulation** of a field only needs to be **performed in one table**
    26. Suggest advantages of normalization [3]
        *   Reduced total data storage
        *   Update is easier
        *   Easier to protect sensitive information through the use of keys
        *   Atomic values in attributes give uniformity in writing queries
        *   More complex operations can be implements more easily by queries on rows/columns
    27. Suggest a way to ensure that a field contains atomic values
        *   Split the field into two fields
    28. Outline issues caused by redundant data [2]
        *   Wastes space in database
        *   Creates potential of incontinence and anomaly
        *   Required extra work to keep updated
9. This question is about the **normal forms**
    29. State conditions for 1NF
        *   All keys are indicated
        *   All attributes display a value
        *   All values are atomic
        *   No duplicate rows
        *   Primary key present
    30. State the conditions for 2NF
        *   **All** non-key attributes are dependent on **all parts** of the primary key (partial dependence)
        *   Database is already in 1NF
    31. State the conditions for 3NF
        *   All fields directly related to the primary key (transitive dependency)
10. This question is on a pharmacy
   32. Why is data stored in a central database instead of locally? [2]
       *   Same consistent view of across all pharmacies at any time
       *   Centrally uploaded
   33. Identify the database function available to the pharmacist [1]
       *   Query function
   34. Explain concurrency [3]
       *   The database is accessed by multiple users
       *   At the same time
       *   Allowing equal access to the database
11. This question is about data modelling
    35. Explain the importance of data modelling in the design of a database [3]
        *   A data model is the “blueprint” for the physical database
        *   Ensure that all the data objects required are identifies and accurately specified
        *   Provide a description of the database that can be understood reviews by customers/end-users
    36. Discuss the importance of data modelling in the design of a relational database [6]
        *   Data must be modelled knowing the purpose, otherwise the data will not do what is required
        *   Identify the entities/tables; if incorrect, they will not support the purpose of the DB
        *   The attributes of the tables show be necessary and sufficient for purpose; otherwise may get inefficiencies
        *   The keys for accessing the tables need to be identified, otherwise the user cannot access the data
        *   Identify the relationships among tables otherwise the user cannot perform complex queries across several tables, and identification of relationships and normalization reduces data duplication
12. This question is about data warehousing
    37. Describe advantages of using data warehousing [2]
        *   A data warehouse contains **historical data** which allows analysis of data trends over time
        *   For example, weekly sales data from multiple years could be analyzed to reveal seasonal patterns
    38. Describe two differences between a data warehouse and a database [4]
        *   **Design purpose**: DB designed for recording records, and transactions whereas DW is designed for large-scale reporting
        *   **Size of data stored**: DW stores a much larger amount of information than a DB
        *   **Operations on data**: information in DW must eventually be read whereas a DB supports update
        *   **Data redundancy**: DBs are normalized to reduce redundant data and therefore space whereas DW may contain redundancy to reduce response time (all SELECTS can be done together)
        *   **Data model**: DW uses a multidimensional data model to support data analysis, whereas a DB is essentially based on the ERD
        *   **Importance of age (date) of data**: the DB will store the latest/current state, whereas the DW is time variant
    39. Describe how cluster analysis is used in data mining
        *   Used to discover groups of data
        *   Which form related clusters
        *   And hence form patterns which are otherwise unseen
    40. Explain why data in a data warehouse needs to be time dependent [3]
        *   In a DW, the value of data vary over time (data is time-variant)
        *   It is necessary to keep the history of data changes
        *   To be valid, analysis needs to be made on current and not on historical data
        *   Therefore analysis needs to be computed as data received
    41. Suggest how this time variance is achieved [2]
        *   Time is a variable used in analysis
        *   New data entering the DW get a unique time-ID
13. This question is about data warehousing and data mining in school
    42. Describe the process that would need to be followed to move data from each school into the data warehouse [4]
        *   Extraction:
            *   Relevant data from each school should be identified and prepared in view of transfer to data warehouse using principles of ETL
            *   They are stored temporarily in the data warehouse
        *   Transformation:
            *   Data are transformed in a format that is suitable for the use required 
            *   Raw data are given (without normalization) as the target database may be preferably need to have un-normalized data to run analytics, and can better normalize data from all schools together once available
        *   Loading:
            *   Data from each school transmitted/transferred to data warehouse to be loaded by target database
            *   Transfer may happen at scheduled times in order to not hinder operations 
    43. Explain the process used to locate schools with low test scores [4]
        *   **Deviation detection**
        *   Access the marks from the data warehouse, and calculate the average and find schools with a score lower than the average
        *   Then using the algorithm, list the names of the schools (find the outliers of the average)
    44. Compare the use of cluster analysis and association analysis in attempting to understand distribution of scores [4]
        *   Cluster analysis groups schools or pupils by scores, enabling comparison between groups
        *   Association analysis breaks up datasets by variables such as gender, location, age, enabling the investigation of patterns (allows detection of certain patterns independently)
        *   Since the age groups is fixed, cluster analysis allows us to see the geographic distribution of scores, and to analyse trends over time, suggesting whether an improvement in a location is observable
        *   Association analysis may be used to detect patterns independently from geographic region, such as females performing better than males
14. This question is about data privacy and social issues of databases
    45. Discuss issues related to privacy if data was accessed by the police
        *   Customer information might be made available
        *   Police could identify suspicious reading purchasing habits
        *   This may represent a breach of the customer's privacy
        *   The information may prove unreliable
    46. Discuss the implications on privacy of using data mining techniques in e-commerce
        *   Factual data, analysis on data, and browsing habits can be grouped by purchasing order
        *   Use of cookies means having permanent identifier on the computer, and can monitor our trends/habits
        *   By cross-referencing data, they may offer the same product at different prices for different groups of people (higher price for those showing profile of a wealthy person)
        *   E-commerce sites either must give out or do not care to protect enough some information to their third-party partners
        *   Third-party may breach the privacy of the e-commerce site
        *   E-commerce companies may be acquired and privacy policies may change.be revised, the acquirer may not be aware of the whole situation, especially with global companies/third parties
    47. Explain the benefits offered by data sharing in databases for stakeholders [6]
        *   Data sharing: databases are shared according to the needs of different user groups
        *   The information needed by the group is made ‘closer’ to the user
        *   Hence, less focus on transmission/traffic, but required more storage (although storage is cheap)
    48. Suggest **negative impacts** arising from the use of **cluster and association analysis** in data mining if results a republished [4]
        *   Negative effect of cluster analysis:
            *   Partitions data into groups exhibiting similar characteristics, allowing groups to be based on performance
            *   May indicate one region has performed poorly over time
            *   Such information if used inappropriately could have bad effects on students and schools
            *   May impact ability of teachers and headteachers to maintain the schools
        *   Negative effect of association analysis:
            *   Relationships found may not be causal (may be based on correlation rather than causation)
            *   Therefore, inferences may not be correct and could be harmful if released
            *   May not provide decision makers with appropriate data
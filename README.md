### Requirements

Node version >= 15.0.0


### Commands

#### `yarn` 

install dependencies

#### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### Branching model

Each team should use dedicated branch:
- https://github.com/adrianwarkocz/assessment-center/tree/team1
- https://github.com/adrianwarkocz/assessment-center/tree/team2
- https://github.com/adrianwarkocz/assessment-center/tree/team3

All changes need to be merged to team branch at the end, and presented from that branch. During work participants should create own subbranches from team branch to be able to work in parallel.

Remember - frequent merges are a good practice. 
Not leave merging everything together for the last couple of minutes.

### Task Description

Create application responsible for managing warehouse/shop items. 
Application should display a list of warehouse/shop items in the main screen in a form of a table/list.
There should be an option to add new item from a modal/overlay which will be opened using button located in the top area.
Each warehouse/shop item should have own name, description, price and *FEW* other parameters decided by team.
On the main list/table view only the most important parameters should be displayed, like name, description and price. 
Additional parameters should be presented on modal/overlay opened after clicking "show more details" button located on the each item.
Some additional stuff can also be added like: styling header area in some eye catching interesting way, implementing error handling for adding items form. 
Ability to remove items from a list with confirmation, to prevent button accidential clicks. Adding alphabetical sorting to specific table/list columns. 
 
Below there is a list of tasks marked with priorities.
Firstly focus on HIGH priority items, then MEDIUM.
Low priority items should be added after finishing previous parts.

1. Create a button in the top ActionBar area to open the modal that will be created in next point  - High 
2. Create Modal with the form for adding new shop/warehouse item - High
3. Create a Table/List of items with the most important item's data displayed on the list  - High 
4. Create a modal for displaying warehouse/shop item details - High 
5. Create an action button in the list/table which will open the item details modal - High
6. Create Cool Header with logo (if you find any) - Medium
7. Add Error handling for task #2 - Medium
8. Create a button for delete single record (confirmation is nice to have) - Medium
9. Add Sorting possibility for table/list - Low
10. Add ability to persist data in the browser. After browser refresh added items should be remembered and shown to the user. - Low

### Tips

- Its allowed to use any helper libraries, components or frameworks that will help make a work done



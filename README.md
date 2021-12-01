# StageClientAssessments

I was given an assignment by my internship to make an anagram function and a front end that communicates with the Rijksmuseum API.
This project is a combination of them both.


On the landing page you get can choose between assignment 1 and 2
- assignment 1: Gives you the option to give a few words as input and returns an anagram.
- assignment 2: is a master list with details combined in 1 page with a filter that runs get requests.


Why I chose lodash? Lodash is handy with combining multiple values and I used the following functions
- _obitBy(obj, _isUndefined): 
filter out any keys that had undefined values in the object you pass into query()
-	_assign:
Combines the API key and the filter object into one query object

I did run in some issues while programming and one of them was that the collection details API was broken.
The end point to fetch additional info about a piece via object number kept returning a 500 status, so I just used the little info returned by the search in its place. 
Although I still got a detail page for each art object, its less then it should have been. 
Their own example in their documentation doesn’t even work.

But outside of issues like that most things went smooth.

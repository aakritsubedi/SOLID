# Open-Closed Principle

We are now going to look at the **'O'** in SOLID, which is the 2nd design principle. This is often abbreviated as OCP.  

'O' stands for Open Closed Principle .

Open-Closed Principle states, "Software components should be closed for modification, but open for extension".  

So this presents kind of a conundrum: How can something be open and closed at the same time?

> So when we say software components should be closed for modification, this is what we mean: 
> - **Closed for modification:**
> New features getting added to the software component,should NOT have to modify existing code. 
> - **Open for extension:** 
> A software component should be extendable to add a new feature or to add a new behavior to it. 

So even though the term open-closed might sound like a conundrum, this is what it really means.

> Avoid the touch in existing code. Because in order to add a new feature, we are having to touch existing code which go against the Open Closed Principle. The existing code is supposed to be closed for modification. 

We need to update the codebase in such a way that it handles the future extensions. 

## Principal benefit form the new design 
- Ease of adding new features.
> This can be translate to cost savings. Assume we do not follow the Open Closed Principle. Then for all additional features, we will end up having to modify the existing code. The more the number of changes we introduce to the existing code, the more time we need to spend on testing and quality assurance, to make sure we did not introduce any bug into the existing code. So to sum up , ease of adding new features , leads to minimum cost of developing and testing that is involved. 
- Open Closed Principle often required decoupling which, in turn, automatically follows the Single Responsibility Principle. 
> So after we made our design conform to the Open Closed Principle, we ended up with components that were more loosely coupled.

> The SOLID Principles are all intertwined and interdependent. They are most effective when they are combined together. 

## Cautions
- Do not follow the open closed principles blindly. You will end up with huge number of classes that can complicate your overall design. 
> Its a subjective, rather than an objective decision, to decide when and where to apply the Open Closed Principle to your design. 

## Summing-Up

"Software components should be closed for modification, but open for extension"  
> Closed for modification means that New features getting added to the software component, should NOT have to modify existing code. And at the same time, Open for extension means: A software component should be extendable to add a new feature or to add a new behavior to it.

Following Open Closed Principle can lead to cost benefits in the long run.  

Open Closed Principle and Single Responsibility Principle can work together to achieve a better design.  

Do not apply Open Closed Principle blindly and introduce unwanted complexity to your code. 

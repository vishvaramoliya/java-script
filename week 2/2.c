// Q.2 Write a Program to find the length of the String by passing a string as an argument using UDF.For example,
// Input:
// Enter any string: development

// Output:
// Length is: 11


#include<stdio.h>
int len(char s[100])
{
    int i,len=0;

    for ( i = 0; s[i] != '\0' ; i++)
    {
        len ++;
    }
    
    
    return len;
    
}

int main()
{
    char s[100];

    printf("enter size of array:");
    gets(s);

    

    int ans= len(s);

    printf("\n THE SIZE OF STRING IS=%d",ans);

}
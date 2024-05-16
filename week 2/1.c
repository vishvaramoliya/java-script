// Q.1 Write a Program to find the sum of all 1D Array elements by passing an array as an argument using UDF.
// For example,
// Input:
// Enter array size: 5
// Enter array elements:
// a[0] = 6
// a[1] = 4
// a[2] = 1
// a[3] = 5
// a[4] = 2


#include<stdio.h>
int arr(int a[], int size)
{
    int sum=0;

    for (int i = 0; i < size; i++)
    {
        sum +=a[i];
    }

    return sum;
    
}

int main()
{
    int size;

    printf("enter size of array:");
    scanf("%d",&size);

    int a[size];

    for(int i=0; i<size; i++)
    {
        printf("enter no:");
        scanf("%d",&a[i]);
    }

    int ans= arr(a, size);

    printf("\n THE SUM OF ARRAY IS=%d",ans);

}
#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;

int main() {
    int n,m,i=0;
    cin>>n>>m;
    int s1 = n;
    int s2 = m;
    int a[n], b[m];
    int count = 0;
    int status;
    while(n--)
        cin>>a[i++];
    i=0;
    while(m--)
        cin>>b[i++];
    sort(a,a+s1);
    sort(b,b+s2);
    for(int j= a[s1-1]; j<=b[0]; j++) {
        
        for(int k = 0; k<s1; k++) {
            if(j%a[k]!=0) {
                status = 0;
                break;
            }    
        }
        
        for(int l = 0; l<s2; l++) {
            if(b[l]%j!=0) {
                status = 0;
                break;
            }    
        }
        if(status!=0)
        ++count;
        
        status = 1;
    }
    cout<<count; 
    return 0;
}

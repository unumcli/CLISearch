<aura:application extends="force:slds">
  	
	<!-- attributes for the Authorization Info -->
    <aura:attribute name="emailId" type="String" default="architdutt@gmail.com"/>
    <aura:attribute name="isUserInternal" type="Boolean" default="false"/>
    <aura:attribute name="validLogin" type="Boolean" default="false"/> 
    <aura:attribute name="GetAuthorization" type="GetAuthorization"/>
    <aura:attribute name="OrganizationCollection" type="GetAuthorization.OrganizationCollection"/>
    <!-- attributes for the Authorization Info ends here--> 
    
    <!-- attributes for the Title and Page Path -->
    <aura:attribute name="setSearch" type="Boolean" />
    <aura:attribute name="setNameResults" type="Boolean" /> 
    <aura:attribute name="setRecordResults" type="Boolean" /> 
    <!-- attributes for the Title and Page Path ends here-->
    
    <!--   <aura:handler name="init" value="{!this}" action="{!c.doInit}"/>	-->
        
    <aura:handler name="FormDataCompEvent" event="c:FormDataCompEvent" action="{!c.handleComponentEvent}"/>
    
    
    <c:UNum_LookUpWrapperComponent />
    
<!--  	<c:CLISearchFilter /> -->
  <!--  <c:Unum_Common_V1_CLISearchFilter /> -->
           <!--     <aura:renderIf isTrue="{!v.validLogin}"> 	
                   		<c:Unum_Common_V1_CLISearchTitle />
    					<c:Unum_Common_V2_CLISearchFilter /> -->
   						<!-- <c:Unum_Common_V2_CLISearchEmployeeList />
   					 <c:Unum_Common_V2_CLISearchEmployeeList_Clone /> -->
                   
              <!--        <aura:set attribute="else">     -->              
                    
                <!--           <div> -->
        					
               <!--               <p>Invalid Login!!</p>	-->
            				
        		  <!-- 		</div>	-->
                  <!-- 	</aura:set>	-->
                <!--    </aura:renderIf>    -->
    
    
  <!--  <c:CLISearchEmployeeList aura:id="child"/> -->
<!--   <c:CLISearchClaimLeaveList /> 
	<c:CLISearchClaimDetailsPopup /> 
	<c:CLISearchLeaveDetailsPopup /> -->
</aura:application>
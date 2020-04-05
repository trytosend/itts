import { SectionI } from 'src/models/section';

export class Data {

  public static sections: SectionI[] = [{
    name: 'Application contains Confidential or Personal Information',
    options: ['Yes', 'No', 'N/A'],
    questions: [
      {text: 'Confidential label is applied'},
      {text: 'Access control policy is defined and access to CI is restricted to individuals on a need-to-know basis'},
      {text: 'Confidential Information in transit across any network is encrypted'},
      {text: 'Confidential Information stored on removable media (+back up media) is encrypted'},
      {text: 'Systems and media containing CI have secure disposal process in place'},
      {text: 'GPA is completed before MTP of application'}
    ]},
    {
      name: 'Application contains SPI, e-payment data, Crown Jewel Data',
      options: ['Yes', 'No', 'N/A'],
      questions: [
        {text: 'All this data are classified as CI and protected with controls applicable in section 1'},
        {text: 'All accesses to application are logged and monitored for misuse'},
        {text: 'SPI and e-payment data "at rest" in the application or database are encrypted'}
    ]},
    {
      name: 'Secure logon procedures are utilized to control access to application',
      options: ['Yes', 'No', 'N/A'],
      questions: [
        {text: 'Centrally managed indentity is applied (W3ID, SSO)'},
        {text: 'Multi-factor mechanism for any authentication over public network is implemented (CISCO AnyConnect Secure Mobility Client)'},
        {text: 'Multi-factor mechanism for any authentication of users with privilieged access rights'},
        {text: 'Protection of authentication system against brute-force log-on attempts is applied (lock-out procedure after a number of failed logon attempts within a certain time interval)'},
        {text: 'Logs for(un)successful logon attempts are applied'},
        {text: 'Process for security event logs is applied (for attempted ir successful breach of log-on controls)'},
        {text: 'Credentials are not transmitted in clear text over any network'},
        {text: 'Inactive sessions are terminated aafter a defined period of inactivity'}
    ]},
  ];
}

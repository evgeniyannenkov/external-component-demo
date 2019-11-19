import uuid from 'uuid';

export default {
  id            : uuid.v4(),
  cacheVersion  : uuid.v4(),
  label         : 'External Step template',
  description   : 'External step template description',
  categories    : ['Logical'],
  tags          : null,
  recommended   : null,
  icon          : '',
  iconType      : 'default',
  iconUrl       : '',
  shape         : 'circle',
  isGatewayStep : false,
  publishedBy   : 'Eugene Annienkov',
  version       : '0.0.1',
  help          : 'Externals step allows to generate external step template code.\n\n**Code Settings**\nMerge values can be used for this purpose. \n\n**Advanced Settings**\n\n**Reporting events**\nDefault reporting events for the step is Step. Once step executed, each event collects specific data, which can be used in reports. Flow composer is able to specify tags for each event. Tag acts as a marker for the event it’s specified for. Those markers allow to build more extended reports.',
  data          : {
    exits : [
      {id : 'next', label : 'next'}
    ]
  },
  dateCreated  : Date.now(),
  dateModified : Date.now(),
  form         : {style : undefined, template : undefined, code : undefined},
  formBuilder  : {
    formTemplate : `<!-- Tread lightly here there be form elements from Design tab, you've been warned! -->
                            <%= inputs ? inputs.join('\n    ') : '' %>
                                <!-- Form elements from Design tab will end here -->`,
    hasDataOut      : false,
    hasProcessError : false,
    outputExample   : null,
    stepExits       : [
      {
        component : 'exitStatic',
        data      : {
          id    : 'next',
          label : 'next',
          condition: '',
        }
      }
    ],
    stepInputs : []
  },
  migrations    : [],
  modules       : [],
  outputExample : null,
  rawMode       : false,
  reporting     : {},
  template      : '',
  isExternalStep : true
};

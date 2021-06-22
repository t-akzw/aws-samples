  import { createApp } from 'vue'
  import App from './App.vue'
  import Amplify from 'aws-amplify';
  import aws_exports from './aws-exports';
  import {
    applyPolyfills,
    defineCustomElements,
  } from '@aws-amplify/ui-components/loader';
 
  Amplify.configure(aws_exports);
  Amplify.configure({
 //   Auth: {
 //    identityPoolId: 'us-east-1:xxx-xxx-xxx-xxx-xxx',
 //     region: 'us-east-1'
 //   },
    Interactions: {
      bots: {
        "OrderFlowers_dev": {
          "name": "OrderFlowers_dev",
          "alias": "$LATEST",
          "region": "us-east-1",
        },
      }
    }
  });
  applyPolyfills().then(() => {
    defineCustomElements(window);
  });

  createApp(App).mount('#app');
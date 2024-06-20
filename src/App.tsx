import { RenderView } from './ui_rendering';
import { PageProvider, Context } from './context/page-context';
import CssBaseline from '@mui/material/CssBaseline';

const RenderViewComponent = () => {
  const { pageData } = Context();
  return pageData 
      ? <RenderView data={pageData} context={Context} />
      : null;
} 

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <PageProvider>
        <RenderViewComponent />
      </PageProvider>
    </div>
  );
}

export default App;

import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { BigPhotoViewer } from './BigPhotoViewer/BigPhotoViewer';
import { imageUrls } from './UrlGenerator';
import ReactTestUtils from 'react-dom/test-utils';

/*
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
*/

test('image URLs are working', () => {
  expect(imageUrls).toContain('https://picsum.photos/id/600/1600/900.jpg');
  expect(imageUrls).not.toContain('https://picsum.photos/id/601/1600/900.jpg');
});

test('Big Photo Viewer Snapshot matches', () => {
  const photoViewer = render(<BigPhotoViewer id="Big-photo-viewer" src={imageUrls[0]}/>);
  expect(photoViewer).toMatchSnapshot();
});

test('Thumbnail click action works', () => {
  render(<App />);
  const thumb = screen.queryAllByAltText("thumbnail photo")[1];
  /*const thumb = screen.queryAllByTestId("photo-selector")[1];*/
  const photoViewer = screen.queryByAltText("big photo viewer");
  fireEvent.click(thumb);
  expect(photoViewer.src).toBe(thumb.src);
});
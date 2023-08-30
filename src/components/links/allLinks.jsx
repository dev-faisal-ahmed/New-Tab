import { LinkContainer } from "./linkContainer";

export function AllLinks({ allLinks, onDeleteLink, onUpdateLink }) {
  return (
    <>
      {allLinks.map((link, index) => (
        <LinkContainer
          title={link.title}
          url={link.url}
          favIconUrl={link.favIconUrl}
          onDeleteLink={onDeleteLink}
          onUpdateLink={onUpdateLink}
        />
      ))}
    </>
  );
}

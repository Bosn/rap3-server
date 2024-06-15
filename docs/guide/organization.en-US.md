---
group:
  title: Project
  order: 200
---

# Organization

Create Organization

- First, Enter the organization page, then click the `create team` button

<code src="./project/component/create_button.tsx" inline=true></code>

- In the create popup, input all the required info, add your team members, click `submit` button

<code src="./project/component/create_popup.tsx" inline=true></code>
Edit Organization
- Find the edit button in one organization card panel, then click it

<code src="./project/component/edit1.tsx" inline=true></code>

- Or click one card, click the `Edit team` button on the top right of the page
<code src="./project/component/edit2.tsx" inline=true></code>
Exit Organization
- If you don't want to join an organization again, you can click the exit button on the card

<code src="./project/component/exit.tsx" inline=true></code>
Delete Organization
- Click the trash button on the card, and second confirm to delete an organization. It is very dangerous to delete an organization, it will kindly remind you.

<code src="./project/component/delete.tsx" inline=true></code>
Organization authorities

- Set public or private
1. You can set the public auth though edit an organization.
2. If the organization set into public, it can be visited by everyone in rap but only edit by members.
3. If set it into private, it only can be visited by the owner and the organization members.

<code src="./project/component/public.tsx" inline=true></code>

- Set members
1. You can manage your team members through edit, it support search with names or emails
<code src="./project/component/search_members.tsx" inline=true></code>
Create Repository

- In the organization you can click the `create repository` button to create new repository, see more [create repository](https://infra-fe.github.io/rap-client/guide/project/repository#create-repository)

Import Repository

- Also you can click the `import repository` button to migrate one repository
- you can paste the url or the backup data into the input, then click the `submit` button. The priority of url data is much more higher.
- Import data you can see [export data](https://infra-fe.github.io/rap-client/guide/export#export-rap)

<code src="./project/component/import.tsx" inline=true></code>




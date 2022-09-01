# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

- Move Typescript dependencies to fix package installation

## [2.0.0] - 2022-08-30

- Update typescript to 4.8
- Update various dev dependencies
- Be more lenient in peer dependencies
- Add `innerRef` property. Use it to pass a `ref` to the hidden `input` field containing the whole normalized phone number, including country dial.
- Change `name` property to be set on the hidden input field containing the whole normalized phone number including country dial. Before, it was set on the visible input field containing the formatted phone number without country dial.
- Fix infinite update
- Add `name="[name]-without-country"` to visible input field for easier access (e.g. during test automation).

## [1.0.1] - 2022-08-29

- Fix dependency
- Fix discovery of types
- Fix multiple type declarations

## [1.0.0] - 2022-08-29

- Initial release

[Unreleased]: https://github.com/metikular/mui-phone-number/compare/v2.0.0...HEAD
[2.0.0]: https://github.com/metikular/mui-phone-number/compare/v1.0.1...v2.0.0
[1.0.1]: https://github.com/metikular/mui-phone-number/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/metikular/mui-phone-number/releases/tag/v1.0.0
